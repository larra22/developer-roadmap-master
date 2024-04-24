import mysql from 'mysql2/promise';

export const prerender = false;

const connectionConfig = {
  host: 'localhost',
  user: 'roadmap',
  password: 'roadmap',
  database: 'roadmap',
  port: 3307,

};


export const pool = mysql.createPool(connectionConfig);


export {pool as db}


