-- Alle Datensätze und Spalten in der Tabelle abrufen
SELECT * FROM Students;

-- Nur die Spalten mit Vorname und Nachname von Students ausgeben
SELECT FirstName, LastName FROM Students;

-- Alle Spalten von Students, bei denen in der Spalte der Wert Slytherin steht
SELECT * FROM Students WHERE House = "Slytherin";

SELECT * from Students WHERE House = "Hufflepuff" AND YearOfStudy = 6;

-- Alle Spalten von Students, bei denen in der Spalte der Wert Slytherin  oder Hufflepuff steht
SELECT * FROM Students WHERE House = "Slytherin" OR House = "Hufflepuff";

SELECT * FROM Students WHERE House = "Slytherin" OR House = "Hufflepuff" OR House = "Gryffindor";

-- Alternative Schreibweise mit "IN" und runden Klammern
SELECT * FROM Students WHERE House IN ("Slytherin", "Hufflepuff", "Gryffindor");

-- Alle Students absteigen nach Geburtsdatum anzeigen lassen
-- DESC = Descending Absteigend
-- ORDER BY sortiert nach Nummer/Alphabet
SELECT * FROM Students ORDER BY BirthDate DESC;

-- Alle Studenten, deren Vornamen mit "H" beginnen
-- Groß- und Kleinschreibung wird nicht beachtet
-- Das Potenzzeichen steh aös Platzhalter für beliebig viele Buchstaben
SELECT * FROM Students WHERE FirstName LIKE "H%";

-- Alle Studenten, deren Vorname ein "H" enthält
SELECT * FROM Students WHERE FirstName LIKE "%H%";

-- Alle Studenten, deren Vorname mit "H" beginnt und dann genau 5 Zeichen danach folgen
-- Der Untersrich steht als Platzhalter für einen Buchstaben
SELECT * FROM Students WHERE FirstName LIKE "H_____";

-- Alle Students bei denen "Unicorn" in der Splate vorkommt
SELECT * FROM Students WHERE WandType LIKE "%unicorn%";


-- Alle Studenten deren Geburtstag wzischen dem 01.01.1980 und dem 31.12.1980 liegen
-- BETWEEN dann der erste Wert und AND dann den zweiten WERT
SELECT * FROM Students WHERE BirthDate BETWEEN "1980-01-01" AND "1980-12-31";

-- Alle Studenten mit StudentID
SELECT * FROM Students WHERE StudentID BETWEEN 11 AND 20;

-- Alle  Students bei denen in der Splate WandType nicht NULL steht / NULL steht
SELECT * FROM Students WHERE WandType IS NULL;
SELECT * FROM Students WHERE WandType IS NOT NULL;

-- Mit COUNT kann ich die Anzahl der Studenten ermitteln
-- Das nennt sich Aggregatfunktion
SELECT COUNT(*) FROM Students;
SELECT COUNT(*) FROM Students WHERE House = "Slytherin";

-- Ich kann der Spalte auch eine eigene Überschrift geben mit AS
SELECT COUNT(*) AS NumberOfSlytherin
FROM Students 
WHERE House = "Slytherin";

-- Mit MAX / MIN können wir den maximalen oder minimalen Wert einer Spalte ausgeben
SELECT MAX(BirthDate) FROM Students;
SELECT MIN(YearOfStudy) FROM Students;

-- Mit AVG wir den Durschnitt einer Spalte ausgeben
SELECT AVG(YearOfStudy) FROM Students;

-- Mit SUM wir den Summe einer Spalte ausgeben
SELECT SUM(YearOfStudy) FROM Students;

-- Mit ROUND() eine Zahl auf eine bestimmte Stellenangabe abrunden
SELECT ROUND(AVG(YearOfStudy), 2) FROM Students;

-- Mit GROUP BY kann ich nach bestimmten Spalten gruppieren und mir dann z. B. die Anzahl der Studenten anzeigen lassen
SELECT House, COUNT(*) 
FROM Students
GROUP BY House;

-- Beispiel nach WandTYpe gruppieren und zählen
SELECT WandType, COUNT(*) 
FROM Students
GROUP BY WandType;

-- Nach House gruppieren und dann nochmal filtern nach den Gruppen (=Häusern), die 10 und mehr Studenten haben
SELECT House, COUNT(*)
FROM Students
GROUP BY House
HAVING COUNT(*) >= 10;

-- Die ersten 5 Datensätze aus den Studenten abfragen (limitieren)
SELECT * FROM Students LIMIT 5;

-- MIt OFFSET kann man die Datensätze überspringen
-- 10 Studenten abholen und dabei 60 überpringen
-- Datensätze 61 bis 70 werden angezeigt
SELECT * FROM Students LIMIT 10 OFFSET 60;

-- ! EXTRA
SELECT * 
FROM Students
ORDER BY StudentID DESC
LIMIT 10;

-- CONCAT kann ich mehrere Spalten zu einer zusammenführen
-- Am besten mit AS einen neuen Spaltennamen dafür vergeben
SELECT CONCAT(FirstName, " ", LastName) AS FullName
FROM Students;


