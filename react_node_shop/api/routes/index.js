if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
// const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { route } = require('express/lib/application');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const initalizePassport = require('./passport-config');

// initalizePassport
// (
//   passport, login => { 
//   return users.find(user => user.login === login )});

router.use(express.json());
// router.use(cors({
//   origin: ["https://localhost:3000"],
//   methods: ["GET", "POST"],
//   credentials: true
// }));

router.use(cookieParser())
// router.use(bodyParser.urlencoded({ extended: true}))


router.use(
  session({
    key: "userId",
    secret: "username",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
      httpOnly: false,
    }
  })
  )

const mysql = require('mysql');
const req = require('express/lib/request');
const { application, response } = require('express');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'pros',
});

// router.use(bodyParser.urlencoded({extended: true})); 
// router.use(bodyParser.json());

router.post("/api/register", (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password,saltRounds, (err, hash) => {

    if(err){
      console.log(err);
    }
    const sqlInsert = "INSERT INTO users (username, password) VALUES (?, ?)";
    db.query(sqlInsert, [username, hash], (err,result) => {
      console.log(err);
    });
  })
});

// router.post("/api/register_niezabezpieczony", (req, res) => {

//   const username = req.body.username;
//   const password = req.body.password;
//   const email = req.body.email;

//   const sqlInsert = "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";
//   db.query(sqlInsert, [username, password,email], (err,result) => {
//     console.log(result);
//   });
//   res.send(200);
// });

router.post("/api/login", (req, res) => {
  
  const username = req.body.username;
  const password = req.body.password;

    const sqlSelectUsers = "SELECT * FROM users WHERE username = ?;";
    db.query(sqlSelectUsers, username, (err,result) => {

      if(err) {res.send({err: err});}
      else if(result.length > 0) {
        
        bcrypt.compare(password,result[0].password,(error, response) => {
          if(response){
            req.session.user = result;
            console.log(req.session.user);
            // res.send(result);
            res.send({message: "Udane logowanie jako: "+req.session.user[0].username});

          }
          else{
            res.send({message: "Wpisałeś złe hasło"})
          }
        });
      }
      else {res.send({ message: "Użytkownik o podanym loginie nie istnieje"});}

      // if(err) {console.log({err: err});}
      // else if(result) {console.log(result);}
      // else {console.log({ message: "Nieudane logowanie"});}
    });
  });

  router.get("/api/login", (req,res) => {
    if(req.session.user) {
      res.send({loggedIn: true, user: req.session.user})
    } else {
      res.send({loggedIn: false})
    }
  })

// router.post("/api/login_niezabezpieczony", (req, res) => {
  
//   const username = req.body.username;
//   const password = req.body.password;
//   // const email = req.body.email;

//     const sqlSelectUsers = "SELECT * FROM users WHERE username = ? AND password = ?";
//     db.query(sqlSelectUsers,[username,password], (err,result) => {

//       if(err) {res.send({err: err});}
//       else if(result.length > 0) {res.send({message: response});}
//       else {res.send({ message: "Nieudane logowanie"});}

//       // if(err) {console.log({err: err});}
//       // else if(result) {console.log(result);}
//       // else {console.log({ message: "Nieudane logowanie"});}
//     });
//   });



router.get('/api/selectUsers', (req, res)=> {
  const sqlSelect = "SELECT * FROM users";
  db.query(sqlSelect, (err,result) => {
    console.log(result);
    res.send(result);
  });
});

router.post("/api/addCategories", (req, res) => {

  const name = req.body.name;
  const description = req.body.description;

  const sqlInsertCategories = "INSERT INTO categories (name, description) VALUES (?, ?)";
  db.query(sqlInsertCategories, [name, description], (err,result) => {
    console.log(result);
  });
  res.send(200);
});


router.get('/api/selectCategories', (req, res)=> {
  const sqlSelect = "SELECT * FROM categories";
  db.query(sqlSelect, (err,result) => {
    res.send(result);
  });
});



router.post("/api/addOferts", (req, res) => {

  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const amount = req.body.amount;
  const datetime = req.body.datetime;

  const sqlOfertAdd = "INSERT INTO oferts (title, description, price, amount, endDate) VALUES (?, ?, ?, ? , ?)";
  db.query(sqlOfertAdd, [title, description, price, amount, datetime], (err,result) => {
    console.log(result);
  });
  res.send(200);
});

router.get("/api/selectOferts", (req, res) => {

  const sqlOfertSelect = "SELECT * FROM oferts WHERE endDate >= CURRENT_DATE ORDER BY endDate";
  db.query(sqlOfertSelect,(err,result) => {
    console.log(result);
    res.send(result);
  });
});

router.post("/api/addOfertsByID", (req, res) => {

  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const amount = req.body.amount;
  const datetime = req.body.datetime;

  const sqlOfertAdd = "INSERT INTO oferts (title, description, price, amount, endDate) VALUES (?, ?, ?, ? , ?)";
  db.query(sqlOfertAdd, [title, description, price, amount, datetime], (err,result) => {
    console.log(result);
  });
  res.send(200);
});

router.post("/api/selectOfertsByID", (req, res) => {
  // console.log(req.body);
  const searchID = req.body.searchID.query;
  // console.log(req.body.searchID.query);
  // console.log(req.body.searchID.query);
  console.log("post: "+searchID);
  

  // const sqlOfertSelect = "SELECT * FROM oferts WHERE endDate >= CURRENT_DATE AND category_id = ? ORDER BY endDate";
  // db.query(sqlOfertSelect, searchID , (err,result) => {
  //   console.log(result);
  //   res.send(result);
  // res.send(200);
});

router.get("/api/selectOfertsByID", (req, res) => {

  const searchID = req.body.searchID.query;
  const search = req.params.query;
  console.log("get: " + searchID+", "+search);
  // const searchID = req.body.searchID.query;
  // console.log("get: "+searchID);
  // const sqlOfertSelect = "SELECT * FROM oferts WHERE endDate >= CURRENT_DATE AND category_id = ? ORDER BY endDate";
  // db.query(sqlOfertSelect, searchID , (err,result) => {
    
  //   console.log(result);
  //   res.send(result);
  // });
});

// router.use(session({
//   secret: 'logowanie',
//   cookie: {maxAge: 30000},
//   saveUninitialized: false,
//   resave: true
// }))



  

// router.get("/api/login",(req,res) => {
//   req.session.isAuth = true;
//   console.log(req.session);
//   console.log(req.session.id);
//   res.send("Sesje");
// })

// router.post('/api/authenticate', async(req, res) => {
//   try{

//     const {username, password} = req.body;

//     const user = await user.findOne({
//       username
//     }).lean();

//     if(!user) {
//       return res.status(403).json({
//         message: 'Wrong email or password'
//       });
//     }

//     const passwordValid = await verifyPassword(
//       password,
//       user.password
//     );

//     if(passwordValid){
//       const {password, bio, ...rest } = user
//       const userInfo = Object.assign({}, { ...rest});

//       const token = createToken(userInfo);

//       const decodedToken = jwtDecode(token);
//       const expiresAt = decodenToken.exp;

//       req.session.user = userInfo;

//       res.json({
//         message: 'Udane logowanie',
//         token,
//         userInfo,
//         expiresAt
//       });
//   } else {
//     res.status(403).json({
//       message: 'Zły mail bądź hasło'
//     });
//   }
// } catch (err) {
//   console.log(err);
//   return res
//   .status(400)
//   .json({ message: 'Błąd '});
// }
// });


// mongoose
//   .connect("mongodb://localhost:27017/sessions", {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   })
//   .then((res) => {
//     console.log("MongoDB Connected");
//   });

// app.listen(4000, () => {
//   console.log("running on port 4000");
// })


// router.post('/users',passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/login',
//   failureFlash: true
  
// }))

// route.use(flash())
// route.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false
// }))

// route.use(passport.initialize())
// route.use(passport.session)

module.exports = router;