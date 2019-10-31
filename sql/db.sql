CREATE TABLE IF NOT EXISTS microclimas(
id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
tempmin FLOAT NOT NULL,
tempmax FLOAT NOT NULL,
humrelmin FLOAT NOT NULL,
humrelmax FLOAT NOT NULL,
phideal FLOAT NOT NULL,
fotoPeriodo INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS plantas(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    nombreComun VARCHAR NOT NULL CHECK (nombreComun <> ''),
    nombreCientifico VARCHAR NOT NULL CHECK (nombreCientifico <> ''),
    tiempoCosecha INTEGER NOT NULL,
    microclimaid INTEGER REFERENCES microclimas(id)
);

CREATE TABLE IF NOT EXISTS cultivos(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    fechainicio DATE NOT NULL,
    fechafin DATE NOT NULL,
    cantidadplantas INTEGER NOT NULL,
    plantaid INTEGER REFERENCES plantas (id)
);

CREATE TABLE IF NOT EXISTS registrosensors(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    valor FLOAT,
    fecha DATE,
    hora TIME,
    cultivoid INTEGER REFERENCES cultivos(id),
    sensorid INTEGER REFERENCES sensors(id)
);

CREATE TABLE IF NOT EXISTS sensors(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    sensor VARCHAR NOT NULL CHECK (sensor <> '')
);

CREATE TABLE IF NOT EXISTS actuador(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    nombre VARCHAR NOT NULL CHECK ( nombre <> '')
);

CREATE TABLE IF NOT EXISTS contadoralertas(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    contador INTEGER NOT NULL,
    actuadoresid INTEGER REFERENCES actuador(id),
    idcultivo INTEGER REFERENCES cultivos(id),
    registroid INTEGER REFERENCES registrosensors(id)
);