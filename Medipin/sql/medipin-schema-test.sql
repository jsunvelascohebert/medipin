drop database if exists medipin_test;
create database medipin_test;
use medipin_test;

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
    
-- ----- ----- known good state ----- ----- --

delimiter //
create procedure set_known_good_state()
begin

    -- delete from bridge tables --
    
    set sql_safe_updates = 0;
    
    delete from user_role;
    alter table user_role auto_increment = 1;
    delete from user_topic;
    alter table user_topic auto_increment = 1;
    delete from topic_article;
    alter table topic_article auto_increment = 1;
    delete from user_topic_article_note;
    alter table user_topic_article_note auto_increment = 1;
    
    -- delete from terminal nodes --
    
    delete from `user`;
    alter table `user` auto_increment = 1;
    delete from topic;
    alter table topic auto_increment = 1;
    delete from article;
    alter table article auto_increment = 1;
    delete from note;
    alter table note auto_increment = 1;
    
	-- populate test data for terminal nodes --
    
    insert into `user` (`name`, username, password_hash, enabled)
		values
    		('john smith', 'john@smith.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 1),
    		('sally jones', 'sally@jones.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 1);
            
    insert into topic (`name`)
		values ('Personal'), ('Partner'), ('Friend');
	
    insert into article (title, `description`, url)
		values 
        ('Diabetes', 'Description of diabetes', 'http://www.test.com/diabetes'),
        ('Asthma', 'Description of asthma', 'http://www.test.com/asthma'),
        ('Allergies', 'Description of allergies', 'http://www.test.com/allergies');
        
	insert into note (`text`, datetime_made)
		values
        ('note 1', '2023-07-19 12:34:56'),
        ('note 2', '2023-07-20 12:34:56'),
        ('note 3', '2023-07-21 12:34:56');
    
    -- populate test data for bridge tables --
    
	insert into user_role (user_id, role_id)
		values (1, 2), (2, 1);
        
	insert into user_topic (user_id, topic_id)
		values (1, 1), (1, 2), (2, 1);
        
	insert into topic_article (topic_id, article_id)
		values (1, 1), (1, 2), (3, 1), (3, 2), (3, 3);
        
	insert into user_topic_article_note (user_id, topic_id, article_id, note_id)
		values
			(1, 1, 1, 1),
            (2, 3, 1, 3),
            (2, 3, 2, 2),
            (2, 3, 3, 1);
            
	set sql_safe_updates = 1;

end //
delimiter ;