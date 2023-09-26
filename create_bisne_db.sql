CREATE DATABASE bisne_db;
USE bisne_db;

CREATE TABLE categorias_productos (
id INT auto_increment PRIMARY KEY NOT NULL,
categoria VARCHAR(100) UNIQUE NOT NULL 
);

CREATE TABLE tamanios (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	ancho INT,
	alto INT,
	diametro INT,
	precio_extra INT
);

CREATE TABLE inventario (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  cantidad INT NOT NULL
  );

CREATE TABLE productos (
	id  INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	nombre VARCHAR(100) NOT NULL,
	precio INT,
	imagen VARCHAR(300),
	descripcion TEXT,
	categoria_id INT NOT NULL,
	descuento INT,
	tamanio_id INT,
 	inventario_id INT,
    FOREIGN KEY (categoria_id) REFERENCES categorias_productos(id),
	FOREIGN KEY (tamanio_id) REFERENCES tamanios(id),
    FOREIGN KEY (inventario_id) REFERENCES inventario(id),	
	created_at TIMESTAMP NOT NULL,
	updated_at TIMESTAMP default CURRENT_TIMESTAMP NOT NULL,
	deleted_at TIMESTAMP default CURRENT_TIMESTAMP
);

CREATE TABLE tipo_usuario (
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
tipo VARCHAR(100) not null
);

CREATE TABLE usuarios (
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
nombre VARCHAR(100) NOT NULL,
apellido VARCHAR(100) NOT NULL,
email VARCHAR(200) NOT NULL,
contraseña VARCHAR(100) NOT NULL,
telefono INT,
direccion VARCHAR(200) NOT NULL,
ciudad VARCHAR(100) NOT NULL,
tipo_usuario_id INT NOT NULL,
created_at TIMESTAMP NOT NULL,
updated_at TIMESTAMP default CURRENT_TIMESTAMP NOT NULL,
deleted_at TIMESTAMP default CURRENT_TIMESTAMP,
foreign key (tipo_usuario_id) references tipo_usuario(id)
);

CREATE TABLE compras (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  fecha_compra DATETIME NOT null default CURRENT_TIMESTAMP,
  precio_total FLOAT(11, 3) NOT NULL,
  usuario_id INT NOT NULL,
  foreign key (usuario_id) references usuarios(id)
 );

CREATE TABLE detalle_compra (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  producto_id int not null,
  compra_id INT NOT NULL,
  cantidad INT NOT NULL,
  subtotal FLOAT(11, 3) NOT NULL,
  foreign key (producto_id) references productos(id),
  foreign key (compra_id) references compras(id)
  );

