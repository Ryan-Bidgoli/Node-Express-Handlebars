
use burgers_db;
drop table if exists burgers;
create table burgers(
    -- primary key
     id int not null auto_increment,
     burger_name varchar (50),
     devoured boolean default false,
     primary key (id)
);
insert into burgers(burger_name)
values ("turkey"),("chicken"),("bbq"),("veggie"),("bacon");

SELECT * FROM burgers_db.burgers;
