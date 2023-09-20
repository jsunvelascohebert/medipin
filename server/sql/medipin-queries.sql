use medipin_test;
use medipin;

-- ----- ----- general query ----- ----- --

select 
	u.username,
    t.topic_id as 'topic_id',
    t.`name` as 'topic_name',
    a.title as 'article_title',
    n.text as 'note_text'
from `user` u
left join user_topic ut on u.user_id = ut.user_id
left join topic t on ut.topic_id = t.topic_id
left join topic_article ta on t.topic_id = ta.topic_id
left join article a on ta.article_id = a.article_id
left join user_topic_article_note utan on 
u.user_id = utan.user_id AND
t.topic_id = utan.topic_id AND
a.article_id = utan.article_id 
left join note n on utan.note_id = n.note_id;

-- ----- ----- queries for articles ----- ----- --

select article_id, title, image_url, image_alt
from article;

select article_id, title, image_url, image_alt
from article
where article_id = 30574;

insert into article 
	(article_id, title, image_url, image_alt)
values
	(30574, 'Gestational Diabetes Screening: Questions for the Doctor', 'https://health.gov/sites/default/files/2022-06/gdsqd.jpg', 'Pregnant woman smiling.');
    
update article set
	title = 'test title update',
    image_url = 'test image_url update',
    image_alt = 'test image_alt update'
where article_id = 30574;

delete from article
where article_id = 30574;    
    
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

select user_id, username, password_hash, enabled
from `user`
where user_id = 1;

insert into `user` (username, password_hash, enabled)
		values
    		('johnsmith', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 1),
    		('sallyjones', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 1),
            ('sillyhead', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 1),
            ('anothertest', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 1);

select user_id, username, password_hash, enabled
from `user`
where username = 'johnsmith';

insert into user_role (user_id, role_id)
	values (1, 1), (2, 1), (3, 1), (4, 1);

-- select r.`role` 
-- from user_role ur 
-- inner join access_role r on ur.role_id = r.role_id
-- inner join `user` u on ur.user_id = u.user_id 
-- where u.user_id = 1; 

-- select r.`role` 
-- from user_role ur 
-- inner join access_role r on ur.role_id = r.role_id
-- inner join `user` u on ur.user_id = u.user_id 
-- where u.username = 'john@smith.com'; 

-- select * 
-- from `user` u
-- inner join user_role ur on ur.user_id = u.user_id
-- inner join access_role ar on ar.role_id = ur.role_id;

-- ----- ----- user_topic queries ----- ----- --

select user_id, topic_id from user_topic;
select user_id, topic_id
from user_topic
where user_id = 1;

insert into user_topic (user_id, topic_id)
values (2, 2);

delete from user_topic
where user_id = 2 and topic_id = 1;

select count(*)
from user_topic
where topic_id = 1;

-- ----- ----- topic_article queries ----- ----- --

select topic_id, article_id 
from topic_article
where topic_id = 3;

select * from topic_article;

-- ----- ----- user_topic_article_note queries ----- ----- --

select * from user_topic_article_note;

select count(*)
from user_topic_article_note
where note_id = 2;

select count(*)
from topic_article
where article_id = 4;