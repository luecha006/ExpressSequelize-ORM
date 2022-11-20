CREATE TABLE public."Users" (
	id serial4 NOT NULL,
	"firstName" varchar(255) NULL,
	"lastName" varchar(255) NULL,
	email varchar(255) NULL,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT "Users_pkey" PRIMARY KEY (id)
);


CREATE TABLE public."Products" (
	id serial4 NOT NULL,
	"productName" varchar(255) NULL,
	"customerName" varchar(255) NULL,
	user_id int4 NULL,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT "Products_pkey" PRIMARY KEY (id),
	CONSTRAINT products_fk FOREIGN KEY (user_id) REFERENCES public."Users"(id)
);

'-----------'

CREATE TABLE public."Admins" (
	id serial4 NOT NULL,
	firstname varchar(100) NULL,
	lastname varchar(100) NULL,
	username varchar(100) NOT NULL,
	password varchar(255) NOT NULL,
	email varchar(100) NOT NULL,
	phone varchar(20) NOT NULL,
	type int4 NOT NULL,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT "Admins_pkey" PRIMARY KEY (id)
);

CREATE TABLE public."Users" (
	id serial4 NOT NULL,
	firstname varchar(100) NULL,
	lastname varchar(100) NULL,
	username varchar(100) NOT NULL,
	password varchar(255) NOT NULL,
	email varchar(100) NOT NULL,
	phone varchar(20) NOT NULL,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT "Users_pkey" PRIMARY KEY (id)
);


CREATE TABLE public."Books" (
	id serial4 NOT NULL,
	book_name varchar(255) NOT NULL,
	author_name varchar(255) NULL,
	category varchar(255) NULL,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT "Books_pkey" PRIMARY KEY (id)
);

CREATE TABLE public."BorrowingBooks" (
	id serial4 NOT NULL,
	user_id int4 NOT NULL,
	book_id int4 NOT NULL,
	start_borrowing date NOT NULL,
	end_borrowing date NOT NULL,
	amount int NOT NULL,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT "BorrowingBooks_pkey" PRIMARY KEY (id),
	CONSTRAINT borrowingbooks_fk1 FOREIGN KEY (user_id) REFERENCES public."Users"(id),
	CONSTRAINT borrowingbooks_fk2 FOREIGN KEY (book_id) REFERENCES public."Books"(id)
);