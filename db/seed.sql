create table user_info(
	user_id serial primary key,
	username varchar(30),
	email varchar(30),
	password text,
	profile_pic text
	);

Create table states(
	state_id serial primary key,
	region_code int,
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

