Domyślne logowanie

login: test
hasło: test

Aby uruchomić dockera należy w cmd wpisać polecenie z pliku "uruchomienie.txt"

Aby wyłączyć podatność należy w katalogu client i pliku OfertSelect.js zakomentować 25 linijke i odkomentować 26 bądź 27 linijke

Aby włączyć rejestracje i logowanie niezabezpieczone należy w folderze api odkomentować register_niezabezpieczony od 80 linijki index.js i login_niezabezpieczony od 133 linijki index.js oraz w folderze client pliku Login.js w 23 i 36 linijce podmienić login na login_niezabezpieczony oraz w folderze client pliku Register.js w 21 linijce podmienic register na register_niezabezpieczony

