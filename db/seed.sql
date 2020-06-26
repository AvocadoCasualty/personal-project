create table user_info(
	user_id serial primary key,
	username varchar(30),
	email varchar(30),
	password text,
	profile_pic text
	);

Create table states(
	state_id serial primary key,
	region_code varchar(30),
	state_name varchar(30)
	);

create table breeds(
	breed_id serial primary key,
	breed_name varchar(50),
	working_variation boolean,
	show_variation boolean
	);

create table kennel_info(
	kennel_id serial primary key,
	user_id int references user_info(user_id),
	kennel_name varchar(100),
	state_id int references states(state_id),
	breed_id int references breeds(breed_id),
	registered_dogs boolean,
	registry varchar(50),
	female_dogs int,
	male_dogs int,
	breed_tests boolean,
    user_bio varchar(1000)
	);

alter table user_info
    add column facebook varchar(200),
    add column instagram varchar(200),
    add column twitter varchar(200),
    add column website varchar(200);

insert into states (region_code, state_name)
values
('No Region Selected', 'No State Selected')
('Southeast','Alabama'),
('Noncontiguous', 'Alaska'),
('Southwest','Arizona');

insert into breeds (breed_name, working_variation, show_variation)
values ('No Breed Selected', false, false),
('Doberman Pinscher', true, true),
('Dutch Shepherd', true, false),
('Belgian Malinois', true, true),
('German Shepherd', true, true),
('Great Dane', true, true);


INSERT INTO kennel_info (user_id, kennel_name, state_id, breed_id, registered_dogs, registry, female_dogs, male_dogs, breed_tests, user_bio)
VALUES (1, 'Delightful Dobies', 3, 59, true, 'AKC', 1, 1, true, 'Interesting bio stuff');
