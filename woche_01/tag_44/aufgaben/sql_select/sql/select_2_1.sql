
-- Alle Kunden deren Namen mit "A" beginnen anzeigen lassen
SELECT * FROM Customers WHERE CustomerName LIKE "A%";

-- Alle Kunden nach Postleitzahl absteigend sortieren
SELECT * FROM Customers ORDER BY PostalCode DESC;

-- Alle Kunden aus dem Land Mexiko nach Stadt und dann nach Kundenname sortieren
SELECT * FROM Customers WHERE Country = "Mexico" ORDER BY City ASC, CustomerName ASC;

-- Alle Kunden aus dem Land Deutschland, UK oder Frankreich anzeigen lassen
SELECT * FROM Customers WHERE Country = "Germany" OR Country ="UK" OR Country = "France";

-- Alle Produkte anzeigen lassen, die in Flaschen vekrauft werden
SELECT * FROM Products WHERE Units LIKE "%jars";

-- Alle Produkte anzeigen lassen, deren Preis zischen 20 und 30 Dollar liegen
SELECT * FROM Products WHERE Price BETWEEN 20 AND 30;

-- Eine Liste, die Produkte nach Anzahl der Kategorie anzeigen lässt
SELECT CategoryID, COUNT(*) AS "Number of Products"
FROM Products
GROUP BY CategoryID;