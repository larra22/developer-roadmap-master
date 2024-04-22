import mysql from 'mysql2/promise';

export const prerender = false;

const connectionConfig = {
  host: '127.0.0.1',
  user: 'roadmap',
  password: 'roadmap',
  database: 'roadmap',
  

};


export const pool = mysql.createPool(connectionConfig);


export {pool as db}


