Link do strony: http://localhost:3000/

Domyślne logowanie
login: test
hasło: test

Aby uruchomić dockera należy w wierszu poleceń w odpowiednim katalogu wpisać polecenie z pliku "uruchomienie.txt"

Aby wyłączyć podatność na XSS Fix należy w katalogu react_node_shop/client/src/Ofert i pliku OfertSelect.js zakomentować 25 linijke i odkomentować 26 bądź 27 linijke

Aby włączyć rejestracje i logowanie niezabezpieczone należy w folderze react_node_shop/client/src i pliku Login.js w 23 i 36 linijce podmienić login na login_niezabezpieczony oraz w folderze react_node_shop/client/src i pliku Register.js w 21 linijce podmienic register na register_niezabezpieczony

Aby odbezpieczyć stronę od SQL Injection należy w folderze react_node_shop/client/src/Category i pliku OfertSelectByCategory w 26 linijce podmienić selectOfertsByID na selectOfertsByID2

Podstrona kategoria do testowania SQL Injection dostępna jest w linku http://localhost:3000/category

Aby uruchomić clienta w Visual Studio Code należy w terminalu wpisać "npm start"
Aby uruchomić api w Visual Studio Code należy w terminalu wpisać "nodemon"

