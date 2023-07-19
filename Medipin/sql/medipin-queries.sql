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
    
-- ----- ----- queries for ___ ----- ----- --