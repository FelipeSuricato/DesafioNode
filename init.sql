CREATE DATABASE desafio;
\c desafio
CREATE SCHEMA desafio;
SET SCHEMA 'desafio';
CREATE TABLE IF NOT EXISTS desafio.mlb_json(
id SERIAL PRIMARY KEY,
json TEXT);