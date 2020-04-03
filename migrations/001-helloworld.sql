-- Up
CREATE TABLE Person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
);

CREATE TABLE Vehicle (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    ownerId INTEGER REFERENCES Person(id)
);

INSERT INTO Person (name, email) VALUEs ('John', 'john@john.com');
INSERT INTO Person (name, email) VALUEs ('Doe', 'doe@doe.com');

INSERT INTO Vehicle (brand, model, ownerId) VALUES ('audi', 'R8', 1);
INSERT INTO Vehicle (brand, model, ownerId) VALUES ('audi', 'R6', 1);
INSERT INTO Vehicle (brand, model, ownerId) VALUES ('mercedes', 'benz', 2);

-- Down
DROP TABLE Person;
DROP TABLE Vehicle;