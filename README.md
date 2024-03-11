# bookapp
Demonstration of database connections


This demonstration contains two separated server versions: v1_sequelize and v2_raw_sql

Preparate database connections:
1) start mysql server
2) create database: books
3) create database user:  bookuser with password: password
and give all rights to books database

To run server v1_sequelize version:
1) open terminal window and go to v1_sequelize folder
2) npm start

To run server v2_raw_sql version:
1) open terminal window and go to v2_raw_sql folder
2) npm start

You can start client for example by using LiveServer (install it first if you don't have it)
In VSCode: right click above index.html and choode "Open with Live Server"

## A: v1_sequelize (database is used ORM style, database and
tables can be created from application)

ORM stands for Object-Relational Mapping. It is a technique used in software development to bridge the gap between object-oriented programming languages and relational databases.

In the context of JavaScript and npm, there are several popular ORM libraries available, such as Sequelize, TypeORM, and Mongoose. These libraries provide a way to interact with databases using JavaScript objects and methods, rather than writing raw SQL queries.

## B: v2_raw_sql (traditional way of connecting to existing database and existing tables and generating SQL statements for interactions. )

When not using an ORM (Object-Relational Mapping) to interact with a SQL database, you would typically use a database driver or connector specific to your programming language and the database you're using. This involves writing raw SQL queries to perform operations on the database.

