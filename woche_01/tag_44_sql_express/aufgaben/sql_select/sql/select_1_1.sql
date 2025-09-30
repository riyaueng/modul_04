

-- Alle Daten von Kunden anzeigen lassen
SELECT * FROM Customers;

-- Kudnenname, Stadt und Land anzeigen lassen
SELECT CustomerName, City, Country FROM Customers;

-- Alle Kunden aus Deutschland anzeigen lassen
SELECT * FROM Customers WHERE Country = "Germany";

-- Alle Kunden aus London, UK anzeigen lassen
SELECT * FROM Customers WHERE Country = "UK" AND City = "London";

-- Alle Kunden alphabetisch nach Name sortiert
SELECT * FROM Customers ORDER BY CustomerName ASC;

-- Nur die ersten 5 Kudneneinträge anzeigen lassen
SELECT * FROM Customers LIMIT 5;

-- Gesamtzahl aller Einträge in der Kundentabelle
SELECT COUNT(*) FROM Customers;