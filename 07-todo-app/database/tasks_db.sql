-- Using PostgreSQL 16

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
	id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	title VARCHAR(100) NOT NULL,
	completed BOOLEAN NOT NULL DEFAULT FALSE,
	created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO tasks (title) VALUES ('Learn SQL');
INSERT INTO tasks (title) VALUES ('Learn Node.js');
INSERT INTO tasks (title) VALUES ('Learn React');
INSERT INTO tasks (title) VALUES ('Learn TypeScript');
INSERT INTO tasks (title) VALUES ('Learn GraphQL');
INSERT INTO tasks (title) VALUES ('Learn Docker');
INSERT INTO tasks (title) VALUES ('Learn Kubernetes');
INSERT INTO tasks (title) VALUES ('Learn AWS');
INSERT INTO tasks (title) VALUES ('Learn GCP');
INSERT INTO tasks (title) VALUES ('Learn Azure');
