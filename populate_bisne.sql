INSERT INTO categorias_productos (categoria) VALUES
    ('tapices'),
    ('espejos'),
    ('cuelga macetas'),
    ('sujeta cortinas'),
    ('varios');

   
INSERT INTO tamanios (diametro, precio_extra) VALUES
    (17, 0),
    (20, 800),
    (25, 1800);
   
insert into inventario (cantidad) values 
	(1),
	(2),
	(3),
	(4),
	(5),
	(10);
   
INSERT INTO productos (nombre, precio, imagen, descripcion, categoria_id, descuento, tamanio_id, inventario_id, created_at, updated_at, deleted_at)
VALUES
    ('Eloísa', 13500, 'eloisa.jpg', 'Ancho: 55 cm / Alto: 80 cm', 1, null, NULL, NULL, 6, NOW(), NOW(), NULL),
    ('Orly', 18500, 'orly.jpg', 'Ancho: 1 metro / Alto: 80 cm', 1, null, NULL, NULL, 6, NOW(), NOW(), NULL),
    ('Candela', 9000, 'candela.jpeg', 'Ancho: 55 cm / Alto: 40 cm. El estante tiene 55x20', 1, null, NULL, NULL, 6, NOW(), NOW(), NULL),
    ('Amalia', 24000, 'amalia.jpg', 'Ancho: 1,30 metro / Alto: 70 cm', 1, null, NULL, NULL, 6, NOW(), NOW(), NULL),
    ('Orly', 18000, 'orly.jpeg', 'Ancho: 1 metro / Alto: 80 cm', 1, null, NULL, NULL, 6, NOW(), NOW(), NULL),
    ('Gal', 2000, 'gal.jpeg', 'Ancho: 1 metro / Alto: 85 cm', 1, null, NULL, NULL, 6, NOW(), NOW(), NULL),
    ('Ariel', 5500, 'ariel.jpeg', 'Ancho: 40 cm / Alto: 45 cm', 1, null, NULL, NULL, 6, NOW(), NOW(), NULL),
    ('Goldina', 6800, 'goldina.jpg', 'Lo elegis del tamaño que quieras', 2, NULL, 1, 6, NOW(), NOW(), NULL),
    ('Fidela', 6800, 'fidela.jpeg', 'Lo elegis del tamaño que quieras', 2, NULL, 1, 6, NOW(), NOW(), NULL),
    ('Silvia', 6800, 'silvia.jpeg', 'Lo elegis del tamaño que quieras', 2, NULL, 1, 6, NOW(), NOW(), NULL),
    ('Clásico', 3000, 'clasico.jpeg', '60 cm de alto. Se adaptan al tamaño de tu maceta', 3, null, NULL, NULL, 6, NOW(), NOW(), NULL),
    ('Flecos', 3000, 'flecos.jpeg', '60 cm de alto. Se adaptan al tamaño de tu maceta', 3, null, NULL, NULL, 6, NOW(), NOW(), NULL),
    ('Nido', 3000, 'nido.jpeg', '60 cm de alto. Se adaptan al tamaño de tu maceta', 3, null, NULL, NULL, 6, NOW(), NOW(), NULL),
    ('Doble hoja', 1500, 'doble-hoja.jpeg', null, NULL, 4, NULL, NULL, 6, NOW(), NOW(), NULL),
    ('Hoja', 2000, 'hoja.jpeg', NULL, 4, null, NULL, NULL, 6, NOW(), NOW(), NULL),
    ('Borla', 1500, 'borla.jpeg', NULL, 4, null, NULL, NULL, 6, NOW(), NOW(), NULL),
    ('Posavaso', 700, 'posavaso.jpeg', 'Tienen 16 cm de diámetro total', 5, null, NULL, NULL, 6, NOW(), NOW(), NULL),
    ('Individual', 4000, 'individual.jpeg', 'Tienen 35 cm de diámetro total', 5, null, NULL, NULL, 6, NOW(), NOW(), NULL),
    ('Llavero', 700, 'llavero.jpg', 'Tienen 16 cm de diámetro total', 5, null, NULL, NULL, 6, NOW(), NOW(), NULL);


insert into tipo_usuario (tipo) values 
('admin'),
('user');

insert into usuarios (nombre, apellido, email, contraseña, telefono, direccion, ciudad, tipo_usuario_id) values
('dh', 'admin', 'admin@dh.com', 'Abc123**', 333333333, "Delladonna Alley 7097", "Qinghaihu", 1),
('Kylynn', 'Ingerman', 'kingerman0@squidoo.com', 'rJ0>6n\cE8&t~', 478796574, "Mosinee Place 567", "Szczecin", 2),
('Grantham', 'Mustin', 'gmustin1@wunderground.com', 'bH5/s&w.', 291544201, "Old ShoreStreet 3129", "Draguignan", 2),
('Kelci', 'Fowls', 'kfowls2@jugem.jp', 'aZ8,t,8CKB!7t)', 808586935, "Drewry Hill 9182", "Zhonglong", 2),
('Neel', 'Pandie', 'npandie3@nsw.gov.au', 'gI5\u#6.`#/n>Zn', 903475975, "Kennedy Terrace 19", "Badarganj", 2),
('Forester', 'Febry', 'ffebry4@nifty.com', 'eX8<*VCa_|kZ', 843438974, "Pond Drive 5", "Mamede", 2);

ALTER TABLE usuarios
ADD CONSTRAINT unique_email UNIQUE (email);

