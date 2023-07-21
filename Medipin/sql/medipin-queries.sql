use medipin_test;

-- ----- ----- queries for articles ----- ----- --

select * from article;

select article_id, title, `description`, url, date_published, publisher
from article
where article_id = 1;

insert into article 
	(title, `description`, url, date_published, publisher)
values
    ('Test Article Add', 'Testing adding an article', 'https://test.com/testadd', null, null);
    
update article set
	title = 'update',
    `description` = 'description update',
    url = 'http://testing.url/com',
    date_published = '2023-07-29',
    publisher = 'update publisher'
where article_id = 3;

delete from article
where article_id = 4;    
    
-- ----- ----- queries for topic ----- ----- --

select * from topic;
select topic_id, `name` from topic;

select topic_id, `name`
from topic
where topic_id = 1;

insert into topic
(`name`)
value ('Test Topic');

update topic set
`name` = 'Test update'
where topic_id = 2;

delete from topic
where topic_id = 4;

-- ----- ----- note queries ----- ----- --

select note_id, `text`, datetime_made from note;

select note_id, `text`, datetime_made 
from note
where note_id = 1;

insert into note
	(`text`, datetime_made)
value
	('Testing add', '2023-07-22 12:34:56');
    
update note set
`text` = 'testing update',
datetime_made = '2023-07-23 12:34:56'
where note_id = 2;

-- ----- ----- user queries ----- ----- --

select * from `user`;

select user_id, `name`, username, password_hash, enabled
from `user`;

select user_id, `name`, username, password_hash, enabled
from `user`
where user_id = 1;

select user_id, `name`, username, password_hash, enabled
from `user`
where username = 'john@smith.com';

select r.`role` 
from user_role ur 
inner join access_role r on ur.role_id = r.role_id
inner join `user` u on ur.user_id = u.user_id 
where u.user_id = 1; 

select r.`role` 
from user_role ur 
inner join access_role r on ur.role_id = r.role_id
inner join `user` u on ur.user_id = u.user_id 
where u.username = 'john@smith.com'; 

select * 
from `user` u
inner join user_role ur on ur.user_id = u.user_id
inner join access_role ar on ar.role_id = ur.role_id;

-- ----- ----- user_topic queries ----- ----- --

select user_id, topic_id from user_topic;
select user_id, topic_id
from user_topic
where user_id = 1;

insert into user_topic (user_id, topic_id)
values (2, 2);

delete from user_topic
where user_id = 2 and topic_id = 1;

-- ----- ----- topic_article queries ----- ----- --

select topic_id, article_id 
from topic_article
where topic_id = 3;

select * from topic_article;

-- ----- ----- user_topic_article_note queries ----- ----- --

select * from user_topic_article_note;