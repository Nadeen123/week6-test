BEGIN;
 DROP TABLE IF EXISTS cities
  CASCADE;


create table cities
(
  id serial primary key,
  city_name varchar(100)not null,
  country varchar(100) not null

);

insert into cities (city_name, country)
values
  ('Hebron', 'Palestine'),
  ('Beurit', 'Lebanon'),
  ( 'Gaza', 'Palestine'),
  ('Jerusalem', 'palestine'),
  ( 'Bagdad', 'Iraq'),
  ('Damascus', 'Syria');



COMMIT;
