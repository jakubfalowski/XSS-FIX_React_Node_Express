const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt');

function initalizePassport(passport, getUserByLogin){
    const authenticateUser = async(login,password,done) => {
        const user = getUserByLogin(login)
        if(user === null){
            return done(null, false, {message: 'nie ma takiego użytkownika'})
        }
        try{
            if(await bcrypt.compare(password, user.password)){
                return done(null,user)
            } else{
                return done(null, {message: 'błędne hasło'})
            }
        } catch (e){
            return done(e)
        }

    }
    passport.use(new LocalStrategy({usernameField: 'login'}),
    authenticateUser)
    passport.serializeUser((user, done) => { })
    passport.deserializeUser((id, done) => { })
    
}

module.exports = initalizePassport