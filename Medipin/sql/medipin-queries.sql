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
