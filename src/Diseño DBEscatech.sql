create database DBEscatech;

use DBEscatech;

create table Clientes(
	NombreCliente varchar(100) not null,
    CedulaCliente mediumint not null primary key,
    Correo varchar(100) not null,
    Usuario varchar(50) not null,
    Contrasena varchar (50) not null,
    Telefono mediumint,
    Direccion varchar (150) not null
);

create table Operadores(
	NombreOperador varchar(100) not null,
    CedulaOperador mediumint not null primary key,
    Correo varchar(100) not null,
    Usuario varchar(50) not null,
    Contrasena varchar (50) not null,
    Telefono mediumint,
    Direccion varchar(150) not null,
    Rol varchar(50) not null
);

create table Productos(
	IdProducto mediumint not null primary key auto_increment,
    NombreProducto varchar(100) not null,
    Modelo varchar(50) not null,
    Marca varchar(50) not null,
    Detalles varchar (300),
    Precio varchar(50),
    Estatus varchar(50) not null,
    Foto varchar(200) not null
);

create table Inventario(
	IdProducto varchar(100) not null,
    NombreProducto varchar(100) not null,
    Cantidad smallint not null,
    Precio mediumint not null
);

create table Ventas(
	IdVenta smallint not null primary key auto_increment,
	NombreCliente varchar(100) not null,
    CedulaCliente mediumint not null,
    MontoTotal bigint not null
);

create table DetalleVentas(
	IdVenta smallint not null,
    CedulaCliente mediumint not null,
	IdProducto mediumint not null,
	NombreProducto varchar(100) not null,
    Cantidad smallint not null
);

create table ServicioReparacion(
	IdServicio mediumint not null primary key auto_increment,
    Nombre char(100) not null,
	Correo char(100) not null,
	Equipo char(100) not null,
	Mensaje char(250) not null
);

INSERT INTO `productos`(`IdProducto`, `NombreProducto`, `Modelo`, `Marca`, `Detalles`, `Precio`, `Estatus`, `Foto`) VALUES
('1', 'Mouse Redragon Cobra M711', 'Cobra M711', 'Redragon', '8 Botones, Conexión USB, DPI mínimo 100, Frecuencia de respuesta 125 Hz / 1.000 Hz, Modelo de sensor Pixart P3360 óptico, DPI máximo 24.000, Frecuencia de respuesta 125 Hz / 1.000 Hz, Peso 105 g.\r\n', '25,00', 'Activo', 'images/Mouse2.png'), 
('2', 'HP H220S Audífonos Gamer', 'H220S', 'HP', 'Conexión de audio de 3.5 mm, Compatibilidad: PS4, Xbox One, Switch y PC, Micrófono omnidireccional, flxible y ajustable con cancelación de ruido, Doble vincha ajustable, Control de volumen incorporado.', '50,00', 'Activo', 'images/Audifonos4.jpg'),
('3', 'Procesador AMD Ryzen 5 2gen', 'Ryzen 5', 'AMD', '6 Nucleos, 12 Hilos, Hasta 4.4GHz, Caché L2 total\r\n3MB, Caché L3 total 16MB, Paquete AM4', '150,00', 'Activo', 'images/Ryzen5-2gen'),
('4', 'Memoria RAM DDR4', 'F4-3200C16D-16GTZR', 'G.Skill', '8GB, PC4 25600, DDR43200MHz', '40,00', 'Activo', 'images/MemoriaRam1.jpg');
