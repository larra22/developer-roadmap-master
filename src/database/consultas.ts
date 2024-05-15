import { type ResultSetHeader} from "mysql2"

import { type IRecurso, db, type IRoadmapEsquema, type IUsuario, type ICategoriaSubNivel } from "./dbMySQL";
import { type ICategoria } from "./dbMySQL";
import { type IRelacionRecursoCategoria } from "./dbMySQL";
import {type IRoadmapComponentePrioridad}   from "./dbMySQL";
import {ER_DUP_ENTRY} from 'mysql-error-keys'


export interface MyErrorEvent {
    code: number;
    message: string;
}


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  INSERT INTO BD %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    export const insertRelacionRoadmapCategoria = async (roadmap: string, categoria: string, prioridad?: number) => {
        const connection = await db.getConnection();
        try {
            let query: string;
            let result: ResultSetHeader; // Change the type annotation to ResultSetHeader
            if(prioridad){
                 query = `INSERT INTO Roadmap_categoria (idRoadmap, componenteCategoria, prioridad) VALUES ('${roadmap}', '${categoria}', '${prioridad}')`;
                [result] = await connection.execute<ResultSetHeader>(query, [roadmap, categoria, prioridad]);
            }else{
                query = `INSERT INTO Roadmap_categoria  (idRoadmap, componenteCategoria) VALUES ('${roadmap}', '${categoria}')`;
                [result] = await connection.execute<ResultSetHeader>(query, [roadmap, categoria]);
            }
    
            return result.insertId;
        } catch (error) {
            console.error('Error adding relacion roadmap-categoria:', error);
        }finally {
            connection.release();
        }
    }

    export const insertNuevoRoadmap = async (roadmap: string, json: any, titulo:string, descripcion: string, relatedRoadmap?:string) => {
        const connection = await db.getConnection();
        try {
            let result: ResultSetHeader; 
            let query: string;
            if(relatedRoadmap){
                query = `INSERT INTO EsquemaRoadmap (idRoadmap, jsonRoadmap, title, description, relatedRoadmap) VALUES ('${roadmap}', '${json}', '${titulo}', '${descripcion}', '${relatedRoadmap}')`;
                [result] = await connection.execute<ResultSetHeader>(query, [roadmap, json, titulo, descripcion, relatedRoadmap]);
            }else{
                query = `INSERT INTO EsquemaRoadmap (idRoadmap, jsonRoadmap, title, description) VALUES ('${roadmap}', '${json}', '${titulo}', '${descripcion}')`;
                [result] = await connection.execute<ResultSetHeader>(query, [roadmap, json, titulo, descripcion]);

            }
            
            
            
            return result.insertId
        } catch (error) {
            console.error('Error adding a new roadmap', error);
        }finally {
            connection.release();
        }
    }


export const insertResource = async (titulo:string, enlaceFichero:string,interno:boolean,descripcion:string | null,n_Dificultad:string | null,tipo:string | null,formato:string | null,idioma:string | null,deInteres:number[] | null ) => {
    const connection = await db.getConnection();
    try {
        
        const query = `INSERT INTO Recurso (titulo, enlaceFichero,interno,descripcion,n_dificultad,tipo,formato,idioma,deInteres) VALUES ('${titulo}', '${enlaceFichero}','${interno}','${descripcion}','${n_Dificultad}','${tipo}','${formato}','${idioma}','${deInteres}')`;
        const [result] = await connection.execute<ResultSetHeader>(query, [titulo, enlaceFichero, interno,descripcion, n_Dificultad, tipo, formato,idioma,deInteres]);
        
        return result.insertId;
    } catch (error) {
        console.error('Error adding resource:', error);
    }finally {
        connection.release();
    }

}


export const addRelacionRecursoCategoria = async (idRecurso: number, idNombre: string) => {
    const connection = await db.getConnection();
    try{
        
        const query = `INSERT INTO Recurso_categoria (idRecurso, idNombre) VALUES ('${idRecurso}', '${idNombre}')`;
        const [result] = await connection.execute<ResultSetHeader>(query, [idRecurso, idNombre]);
        
        return result.insertId;

    } catch (error) {
        console.error('Error adding resource:', error);
    }finally {
        connection.release();
    }

}

export const insertCategoria = async (nombre: string, descripcion:string, superior:string) => {
    const connection = await db.getConnection();
    try {

        const query = `INSERT INTO Categoria (idNombre, descripcion, categoriaSuperior) VALUES ('${nombre}','${descripcion}', '${superior}')`;
        const [result] = await connection.execute<ResultSetHeader>(query, [nombre, descripcion,superior]);
        
        return nombre;
    } catch (error) {
        const errorDuplicate: MyErrorEvent = {
                code: 11062,
                message: ER_DUP_ENTRY
                
        };
        throw errorDuplicate
        }finally {
        connection.release();
    }
    }

    export const insertUsuario = async (email: string, password: string) => {
        const connection = await db.getConnection();
        try {
            
            const query = `INSERT INTO Usuario (email, password, admin) VALUES ('${email}', '${password}')`;
            const [result] = await connection.execute<ResultSetHeader>(query, [email, password]);
            
            return email;
        } catch (error) {
            console.error('Error adding user:', error);
    }
}
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  GET FROM BD %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Obtener los recursos según categoría
export const getResourcesByCategory = async (categoria: string) => {
    const connection = await db.getConnection();
    try {
        
        const query = `SELECT * FROM Recurso_categoria 
            INNER JOIN Recurso ON Recurso_categoria.idRecurso = Recurso.idRecurso 
            WHERE Recurso_categoria.idNombre = '${categoria}'`;
        const [rows] = await connection.execute<IRecurso[]>(query, [categoria]);
        
        return rows || [];
    } catch (error) {
        console.error('Error getting resources by category:', error);
    }finally {
        connection.release();
    }
}

export const getRecursoById = async (idRecurso: number) => {
    const connection = await db.getConnection();
    try {
        
        const query = `SELECT * FROM Recurso WHERE idRecurso = '${idRecurso}'`;
        const [rows] = await connection.execute<IRecurso[]>(query, [idRecurso]);
        
        return rows[0];
    } catch (error) {
        console.error('Error getting resource:', error);
    }finally {
        connection.release();
    }

}

export const getAllRecursos = async () => {
    const connection = await db.getConnection();
    try {
        
        const query = `SELECT * FROM Recurso`;
        const [rows] = await connection.execute<IRecurso[]>(query);
        
        return rows || [];
    } catch (error) {
        console.error('Error getting resources:', error);
    }finally {
        connection.release();
    }


}
export const getResourcesByDificultad = async (dificultad: string) => {
    const connection = await db.getConnection();
    try {
        
        const query = `SELECT * FROM Recurso WHERE n_Dificultad = '${dificultad}'`;
        const [rows] = await connection.execute<IRecurso[]>(query, [dificultad]);
        
        
        return rows || [];
    } catch (error) {
        console.error('Error getting resources by dificultad:', error);
    }finally {
        connection.release();
    }
}

export const getResourcesByTipo = async (tipo: string) => {
    const connection = await db.getConnection();
    try {
        
        const query = `SELECT * FROM Recurso WHERE Tipo = '${tipo}'`;
        const [rows] = await connection.execute<IRecurso[]>(query, [tipo]);
        
        
        return rows || [];
    } catch (error) {
        console.error('Error getting resources by tipo:', error);
    }finally {
        connection.release();
    }
}

/**
 * Este método compronda los markdowns
 * @param categoria 
 * Devolverá el primer resultado de la consulta
 */
export const getCategoriaInformacionRoadmap = async (categoria:string) => {
    const connection = await db.getConnection();
    try {
        
        const query = `SELECT * FROM Categoria WHERE idNombre = '${categoria}'`;
        const [rows] = await connection.execute<ICategoria[]>(query, [categoria]);
        
        return rows[0];
    } catch (error) {
        console.error('Error getting categoria:', error);
    }finally {
        connection.release();
    }
}

export const getAllCategorias = async () => {
    const connection = await db.getConnection();
    try {
        
        const query = `SELECT * FROM Categoria`;
        const [rows] = await connection.execute<ICategoria[]>(query);
        
        return rows || [];
    } catch (error) {
        console.error('Error getting categoria:', error);
    }finally {
        connection.release();
    }
}


export const getComponentesCategoriaPrimerNivel = async (roadmap: string) => {
    const connection = await db.getConnection();
    try {
        
        const query = `SELECT * FROM Roadmap_categoria INNER JOIN Categoria ON componenteCategoria=idNombre WHERE idRoadmap = '${roadmap}' AND Categoria.categoriaSuperior='${roadmap}' ORDER BY prioridad ASC`;
        const [rows] = await connection.execute<IRoadmapComponentePrioridad[]>(query, [roadmap]);
        
        return rows || [];
    } catch (error) {
        console.error('Error getting categoria:', error);
    }finally {
        connection.release();
    }
}

export const getComponentesCategoriaSegundoNivel = async (roadmap: string) => {
    const connection = await db.getConnection();
    try {
        
        const query = `SELECT Roadmap_categoria.componenteCategoria, Categoria.categoriaSuperior
        FROM Roadmap_categoria 
        JOIN Categoria 
        ON Roadmap_categoria.componenteCategoria = Categoria.idNombre 
        WHERE Roadmap_categoria.idRoadmap = '${roadmap}' 
        AND Categoria.categoriaSuperior IN (
            SELECT idNombre 
            FROM Categoria 
            WHERE Categoria.categoriaSuperior = '${roadmap}'
        ) 
        ORDER BY prioridad ASC;`;
        const [rows] = await connection.execute<ICategoriaSubNivel[]>(query, [roadmap]);
        
        return rows || [];
    } catch (error) {
        console.error('Error getting categoria:', error);
    }finally {
        connection.release();
    }
}



export const getRoadmapAlmacenados = async () => {
    const connection = await db.getConnection();
    try {
        
        const query = `SELECT * FROM EsquemaRoadmap`;
        const [rows] = await connection.execute<IRoadmapEsquema[]>(query);
        
        return rows || [];
    } catch (error) {
        console.error('Error getting roadmap:', error);
    }finally {
        connection.release();
    }

}

export const getRoadmapById = async (roadmap: string) => {
    const connection = await db.getConnection();
    try {
        
        const query = `SELECT * FROM EsquemaRoadmap WHERE idRoadmap = '${roadmap}'`;
        const [rows] = await connection.execute<IRoadmapEsquema[]>(query, [roadmap]);
        
        return rows[0];
    } catch (error) {
        console.error('Error getting roadmap:', error);
    }finally {
        connection.release();
    }

}



export const getJsonDeRoadmap = async (roadmap: string) => {
    const connection = await db.getConnection();
    try {
        
        const query = `Select jsonRoadmap FROM EsquemaRoadmap WHERE idRoadmap='${roadmap}'`;
        const [result] = await connection.execute<IRoadmapEsquema[]>(query, [roadmap]);
        
        return result[0];
    } catch (error) {
        console.error('Error obtaining json esquelo', error);
    }finally {
        connection.release();
    }

}

export const getUsuarioSegunEmail = async (email: string) => {
    const connection = await db.getConnection();
    try {
        
        const query = `SELECT * FROM Usuario WHERE email = '${email}'`;
        const [rows] = await connection.execute<IUsuario[]>(query, [email]);
        
        return rows[0];
    } catch (error) {
        console.error('Error getting user:', error);
    }
}

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  UPDATE BD %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    export const updateCategoriaNombreDescripcion = async (idNombre: string, nuevoNombre: string, nuevaDescripcion:string) => {
        const connection = await db.getConnection();
        try {
            
            const query = `UPDATE Categoria SET idNombre='${nuevoNombre}', descripcion = '${nuevaDescripcion}' WHERE idNombre = '${idNombre}'`;
            const [result] = await connection.execute<ResultSetHeader>(query, [nuevoNombre, nuevaDescripcion, idNombre]);
            return result.affectedRows;
        } catch (error) {
            console.error('Error updating categoria:', error);
        }finally {
            connection.release();
        }
    }
    