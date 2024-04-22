import { db } from "./dbMySQL";

//Obtener los recursos según categoría
export const getResourcesByCategory = async (tipo: string) => {
    try {
        const connection = await db.getConnection();
        const query = `SELECT * FROM recursos WHERE Tipo = '${tipo}'`;
        const [rows, fields] = await connection.execute(query);
        connection.release();
        console.log('Resources by category:', rows);
        return rows;
    } catch (error) {
        console.error('Error getting resources by category:', error);
    }
}