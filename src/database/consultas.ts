import { type IRecurso, db } from "./dbMySQL";
import { type ResultSetHeader} from "mysql2"



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
