import { db } from "./db";

const createTable = async () => {
    try {
        const query = 'CREATE TABLE IF NOT EXISTS usuarios (nombre VARCHAR(30), clave VARCHAR(10))';
        await db.query(query);
        alert('Tabla creada exitosamente');
    } catch (error) {
        console.error('Error creating table:', error);
        alert('Error al crear la tabla');
    }
};



//Obtener los recursos según categoría
const getResourcesByCategory = async (category: string) => {
    try {
        const query = `SELECT * FROM recursos WHERE categoria = '${category}'`;
        const { rows } = await db.query(query);
        return rows;
    } catch (error) {
        console.error('Error getting resources by category:', error);
    }
}


//Obtener los recursos según las opiniones

