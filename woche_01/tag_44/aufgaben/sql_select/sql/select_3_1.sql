--  Länder anzeigen lassen, die mehr als 5 Kunden besitzen
SELECT Country
FROM Customers
GROUP BY Country 
HAVING COUNT(*) >= 5;

-- Alle Bestellungen anzeigen lassen, die im August 1996 eingegangen sind
SELECT * FROM Orders WHERE OrderDate LIKE "8/%/1996";

-- Alle Kunden-IDs auflisten, die mehr als eine Bestellung getätigt haben
SELECT CustomerID, COUNT(OrderID) AS "Count of Orders"
FROM Orders
GROUP BY CustomerID
HAVING COUNT(OrderID) > 1;

-- Kunden-ID mit den meisten Bestellungen anzeigen lassen
SELECT TOP 1 CustomerId, COUNT(OrderID) AS "Count of Orders"
FROM Orders 
GROUP BY CustomerId 
ORDER BY COUNT(*) DESC;

-- Alle Produkte, die von der Firma “Heli Süßwaren GmbH & Co. KG” gelefert werden anzeigen
-- ? Beispiel mit SupplierIDs, da es keine SupplierNames-Spalte in der Liste gibt ("Heli Süßwaren GmBH & Co. KG" = 11)
SELECT * FROM Products WHERE SupplierID = 11;

--Durchschnittspreis aller Produkte anzeigen lassen
SELECT ROUND(AVG(Price), 2) FROM Products;

-- Höchstpreis aller Produkte anzeigen lassen
SELECT MAX(Price) FROM Products;

-- Lieferanten anzeigen, deren Telefonnummer keine Klammer enthält
SELECT * FROM Suppliers WHERE Phone LIKE "(%)%";

-- Länder mit Anzahl der Lieferanten absteigend sortiert und bei gleicher Anzahl alphabetisch nach Ländernamen
SELECT Country, COUNT(SupplierName) AS "Count of Suppliers"
FROM Suppliers
GROUP BY Country
ORDER BY 
COUNT(SupplierName) DESC,
COUNT(Country) ASC
