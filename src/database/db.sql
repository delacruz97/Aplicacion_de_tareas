CREATE DATA tasksdb

CREATE TABLE task
(
    id SERIAL PRIMARY KEY, /*id unico*/ /*el id "serial" me permite que si ingrese un intento fallido en mi "post", como ser un titulo ya escrito, este serial me marca error, pero ya me cuenta el id*/
    title VARCHAR(255) UNIQUE NOT NULL, /*titulo UNIQUE(no se repite)*/
    description VARCHAR(255) NOT NULL, /*descripcion*/
    prioridad VARCHAR(255) NOT NULL /*prioridad*/
    prioridad2 INTEGER NOT NULL /*prioridad2*/
    
);
 CREATE TABLE task2
(
    id SERIAL PRIMARY KEY, /*id unico*/ /*el id "serial" me permite que si ingrese un intento fallido en mi "post", como ser un titulo ya escrito, este serial me marca error, pero ya me cuenta el id*/
    entero INTEGER NOT NULL, /*entero*/
);