import mysql from 'mysql2/promise';
import { type RowDataPacket } from "mysql2"

export enum Dificultad {
  Principiante = 'Principiante',
  Intermedio =  'Intermedio',
  Avanzado = 'Avanzado',

}

export enum Tipo {
  PDF = 'PDF',
  Video = 'Video',
  Presentacion = 'Presentacion',

}


export interface IRecurso extends RowDataPacket {
  idRecurso?: number
  titulo: string
  enlaceFichero: string
  descripcion: boolean
  n_Dificultad: Dificultad
  tipo: Tipo
  deInteres: number
}

export interface ICategoria extends RowDataPacket {
  idNombre: string
  descripcion: string
  categoriaSuperior: string

}

export interface IRelacionRecursoCategoria extends RowDataPacket {
  idRecurso: number
  idNombre: string

}

export const prerender = false;

const connectionConfig = {
  host: 'localhost',
  user: 'roadmap',
  password: 'roadmap',
  database: 'roadmap',
  //port: 3307,
  port:3306

};


export const pool = mysql.createPool(connectionConfig);


export {pool as db}
