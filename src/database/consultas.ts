import { type ResultSetHeader} from "mysql2"

import { type IRecurso, db } from "./dbMySQL";
import { type ICategoria } from "./dbMySQL";
import { type IRelacionRecursoCategoria } from "./dbMySQL";

export const addResourceTituloEnlace = async (titulo:string, enlace:string) => {
    try {
        const connection = await db.getConnection();
        const query = `INSERT INTO Recurso (titulo, enlaceFichero,descripcion,nivelDificultad,tipo,deInteres) VALUES ('${titulo}', '${enlace}',null,null,null,null)`;
        const [result] = await connection.execute<ResultSetHeader>(query, [titulo, enlace]);
        connection.release();
        return result.insertId;
    } catch (error) {
        console.error('Error adding resource:', error);
    }

}

export const addRelacionRecursoCategoria = async (idRecurso: number, idNombre: string) => {
    try{
        const connection = await db.getConnection();
        const query = `INSERT INTO Recurso_categoria (idRecurso, idNombre) VALUES ('${idRecurso}', '${idNombre}'`;
        const [result] = await connection.execute<ResultSetHeader>(query, [idRecurso, idNombre]);
        connection.release();
        return result.insertId;

    } catch (error) {
        console.error('Error adding resource:', error);
    }

}

export const addResourceCategoria = async (nombre: string, descripcion:string, superior:string) => {
    try {
        const connection = await db.getConnection();
        const query = `INSERT INTO Categoria (idNombre, descripcion, categoriaSuperior) VALUES ('${nombre}','${descripcion}', '${superior}')`;
        const [result] = await connection.execute<ResultSetHeader>(query, [nombre, descripcion,superior]);
        connection.release();
        return nombre;
    } catch (error) {
        throw new Error('Error adding category: ' + error);
    }
    }

//Obtener los recursos según categoría
export const getResourcesByCategory = async (categoria: string) => {
    try {
        const connection = await db.getConnection();
        const query = `SELECT * FROM Recurso_categoria 
            INNER JOIN Recurso ON Recurso_categoria.idRecurso = Recurso.idRecurso 
            WHERE Recurso_categoria.idNombre = '${categoria}'`;
        const [rows] = await connection.execute<IRecurso[]>(query, [categoria]);
        connection.release();
        console.log(rows);
        
        return rows || [];
    } catch (error) {
        console.error('Error getting resources by category:', error);
    }
}

export const getResourcesByDificultad = async (dificultad: string) => {
    try {
        const connection = await db.getConnection();
        const query = `SELECT * FROM Recurso WHERE n_Dificultad = '${dificultad}'`;
        const [rows] = await connection.execute<IRecurso[]>(query, [dificultad]);
        connection.release();
        
        return rows || [];
    } catch (error) {
        console.error('Error getting resources by dificultad:', error);
    }
}

export const getResourcesByTipo = async (tipo: string) => {
    try {
        const connection = await db.getConnection();
        const query = `SELECT * FROM Recurso WHERE Tipo = '${tipo}'`;
        const [rows] = await connection.execute<IRecurso[]>(query, [tipo]);
        connection.release();
        
        return rows || [];
    } catch (error) {
        console.error('Error getting resources by tipo:', error);
    }
}

/**
 * Este método compronda los markdowns
 * @param categoria 
 * Devolverá el primer resultado de la consulta
 */
export const getCategoriaInformacionRoadmap = async (categoria:string) => {
    try {
        const connection = await db.getConnection();
        const query = `SELECT * FROM Categoria WHERE idNombre = '${categoria}'`;
        const [rows] = await connection.execute<ICategoria[]>(query, [categoria]);
        connection.release();
        return rows[0];
    } catch (error) {
        console.error('Error getting categoria:', error);
    }



}
