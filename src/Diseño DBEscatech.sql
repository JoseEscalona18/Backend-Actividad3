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
    Estatus varchar (50) not null,
    Foto blob not null
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
