-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 31 Sty 2022, 00:00
-- Wersja serwera: 10.4.21-MariaDB
-- Wersja PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `pros`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(80) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `icon` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `icon`) VALUES
(2, 'Dom', 'wszystko co potrzebujesz do twojego wnętrza', ''),
(3, 'Rodzina', 'wszystko co potrzebujesz ty i najbliżsi', ''),
(4, 'Ogród', 'wszystko co potrzebujesz do twojego ogrodu', ''),
(5, 'Samochody', 'u nas najlepsze marki', NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `oferts`
--

CREATE TABLE `oferts` (
  `id` int(11) NOT NULL,
  `title` varchar(150) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `price` varchar(10) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `oferts`
--

INSERT INTO `oferts` (`id`, `title`, `description`, `price`, `amount`, `endDate`, `category_id`) VALUES
(1, 'Woda Rodowita 1,5l', 'Rodowita z roztocza, niegazowana', '199', 12, '2022-03-10', 2),
(2, 'Musli bananowe 100dag', 'Super musli z wieloma witaminiami', '599', 10, '2022-10-29', 3),
(3, 'Wafle ryżowe KUPIEC 100dag', 'Wafle Slim, ryżowe, pełnoziarniste, 18 sztuk', '399', 20, '2022-01-20', 2),
(4, 'oferta1', 'opis1', '888', 3, '2022-12-23', 3),
(10, 'javascript:alert(\'Hacked!\');', 'test3', '777', 2, '2022-05-22', NULL),
(13, '<img src=\"https://kapitanhack.pl/wp-content/uploads/2020/12/main-3.jpg\" alt=\"HACKED\" width=\"500\" height=\"600\">', 'TEST2', '777', 3, '2022-03-12', NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `username` varchar(999) DEFAULT NULL,
  `password` varchar(999) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id_user`, `username`, `password`) VALUES
(5, 'falo99', '$2b$10$IbJLVGkeWB/RY0PuRoluIu/r0eZfbASyQkH3CU229PTAMN4oH6CBe'),
(6, 'test', '$2b$10$nGMKC4yyZIYa9kRZP3iWveSAaDg7kpsBbWVScGuSO9o1ePi7IvuAi'),
(7, 'login', '$2b$10$YHgkqiVeSy/rvLVP0XtWrOcG4f5ZNAgbeSFWXS1nA5sVr2CtoDxpe');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `oferts`
--
ALTER TABLE `oferts`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT dla tabeli `oferts`
--
ALTER TABLE `oferts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
