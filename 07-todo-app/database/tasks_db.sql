-- Using PostgreSQL 16

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
	id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	title VARCHAR(100) NOT NULL,
	completed BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO tasks (title)
VALUES
	('Learn SQL'),
	('Learn Node.js'),
	('Learn React'),
	('Learn TypeScript'),
	('Learn GraphQL'),
	('Learn Docker'),
	('Learn Kubernetes'),
	('Learn AWS'),
	('Learn GCP'),
	('Learn Azure');
