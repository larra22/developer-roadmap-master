import SimplePageHeader from "../../components/SimplePageHeader.astro";
import BaseLayout from "../../layouts/BaseLayout.astro";
import { insertNuevoRoadmap, insertRelacionRoadmapCategoria } from "../../database/consultas.ts";
import '../../styles/formulario.css';
import FormConfigRoadmap from "./FormConfigRoadmap.tsx";
import { useState, useEffect } from 'preact/hooks';
import {type  ICategoria } from '../../database/dbMySQL';

export const prerender = false;

interface OtherProps {
    categoriasNivel1: ICategoria[];
    onSubmit: (formData: any) => void;
}

const Page: preact.FunctionalComponent<OtherProps> = ({ categoriasNivel1, onSubmit }) => {
    const handleFormSubmit = async (formData: { [x: string]: any; titulo: any; descripcion: any; }) => {
        try {
            const { titulo, descripcion, ...categorias } = formData;

            if (titulo && descripcion) {
                const resultId = await insertNuevoRoadmap(titulo, titulo, descripcion);
                    for (const [key, value] of Object.entries(categorias)) {
                        if ((value as { checked: boolean }).checked) {
                            await insertRelacionRoadmapCategoria(titulo, key, parseInt((value as { prioridad?: string }).prioridad || '0', 10));
                        }
                    }
                  
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
      

            <FormConfigRoadmap categoriasNivel1={categoriasNivel1} onSubmit={onSubmit} />

          

    );
};

export default Page;
