drop database if exists medipin;
create database medipin;
use medipin;

-- ----- ----- terminal tables ----- ----- --

create table `user` (
	user_id int primary key auto_increment,
    `name` varchar(100) not null,
    username varchar(50) not null,
    password_hash varchar(2048) not null,
    enabled bit(1) not null
);

create table access_role (
	role_id int primary key auto_increment,
    `role` varchar(100) not null
);

create table topic (
	topic_id int primary key auto_increment,
    name varchar(100) not null
);

create table article (
	article_id int primary key auto_increment,
    title varchar(255) not null,
    `description` varchar(500) not null,
    url varchar(500) unique not null,
    date_published date null,
    publisher varchar(100) null
);

create table note (
	note_id int primary key auto_increment,
    `text` varchar(255) not null,
    datetime_made datetime not null
);

-- ----- ----- bridge tables ----- ----- --

create table user_role (
	user_role_id int primary key auto_increment,
    user_id int not null,
    role_id int not null,
    constraint fk_user_role_user_id
		foreign key(user_id)
        references `user`(user_id),
    constraint fk_user_role_role_id
		foreign key(role_id)
        references access_role(role_id)
);

create table user_topic (
	user_topic_id int primary key auto_increment,
    user_id int not null,
    topic_id int not null,
    constraint fk_user_topic_user_id
		foreign key(user_id)
        references `user`(user_id),
    constraint fk_user_topic_topic_id
		foreign key(topic_id)
        references topic(topic_id)
);

create table topic_article (
	topic_article_id int primary key auto_increment,
    topic_id int not null,
    article_id int not null,
    constraint fk_topic_article_topic_id
		foreign key(topic_id)
        references topic(topic_id),
	constraint fk_topic_article_article_id
		foreign key(article_id)
        references article(article_id)
);

create table user_topic_article_note (
	user_topic_article_note_id int primary key auto_increment,
    user_id int not null,
    topic_id int not null,
    article_id int not null,
    note_id int not null,
    constraint fk_user_topic_article_note_user_id
		foreign key(user_id)
        references `user`(user_id),
	constraint fk_user_topic_article_note_topic_id
		foreign key(topic_id)
        references topic(topic_id),
	constraint fk_user_topic_article_note_article_id
		foreign key(article_id)
        references article(article_id),
	constraint fk_user_topic_article_note_note_id
		foreign key(note_id)
        references note(note_id)
);

insert into access_role (`role`) values
    ('USER'),
    ('ADMIN');