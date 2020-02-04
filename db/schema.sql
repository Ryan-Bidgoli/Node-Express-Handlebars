
drop database if exists burgers_db;
create database burgers_db;
use burgers_db;
create table burgers(
    -- primary key
     id int not null auto_increment,
     burger_name varchar (50),
     devoured boolean default false,
     primary key (id)
)
 
 