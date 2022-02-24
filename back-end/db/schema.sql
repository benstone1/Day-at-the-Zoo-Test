-- DROP DATABASE IF EXISTS  zoo_animals;

-- CREATE DATABASE zoo_animals;

-- \c zoo_animals;

CREATE TABLE animals(
    animals_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    location TEXT,
    img TEXT
);

