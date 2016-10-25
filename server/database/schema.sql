-- Contains data about user types
CREATE TABLE userTypes
(
	id int AUTO_INCREMENT,
	typeName varchar(30),	
	CONSTRAINT pk_userTypes PRIMARY KEY(id)
);

-- Contains user details
CREATE TABLE users
(
	id int AUTO_INCREMENT,
	first_name varchar(30),
	last_name varchar(30),
	email varchar(200) unique,
    email_verified int,
	pwd varchar(60),
	district varchar(30),
	nic varchar(10),
	phone_no varchar(12),
    phone_no_verified int,
	type_id int,	
	CONSTRAINT pk_users PRIMARY KEY(id),
	CONSTRAINT fk_users_usertypes FOREIGN KEY(type_id) REFERENCES userTypes(id)
);

-- Contains subject informations
CREATE TABLE subjects
(
	id int AUTO_INCREMENT,
	subjectName varchar(30),	
	CONSTRAINT pk_subjects PRIMARY KEY(id)
);

-- Paper 
CREATE TABLE papers(
	id int AUTO_INCREMENT,
	paper_name varchar(255),
	year int,
	school varchar(255),
	subject_id int,
	district varchar(100),
	total_time int,

	CONSTRAINT pk_paper PRIMARY KEY(id),
	CONSTRAINT fk_paper_subject FOREIGN KEY(subject_id) REFERENCES subjects(id)
);

-- Questions table
CREATE TABLE questions
(
	id int AUTO_INCREMENT,
	correctAnsNo int,
	questionTime int,
	paper_id int,
	user_id int,
	subject_id int,
	isImage boolean,
	imageURL varchar(255)
	question varchar(1000),
	CONSTRAINT pk_questions PRIMARY KEY(id),
	CONSTRAINT fk_questions_subjects FOREIGN KEY(subject_id) REFERENCES subjects(id),
	CONSTRAINT fk_questions_paper FOREIGN KEY(paper_id) REFERENCES papers(id)
);
-- Answers table
CREATE TABLE answers
(
	id int AUTO_INCREMENT,
	question_id int,
	isImage boolean,
	answerNo int,
	answers varchar(1000),
	imageURL varchar(255),
	CONSTRAINT pk_answers PRIMARY KEY(id),
	CONSTRAINT fk_answers_questions FOREIGN KEY(question_id) REFERENCES questions(id)
);