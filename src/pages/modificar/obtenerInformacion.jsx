import { useState } from "react"; // Assuming you're using React for client-side rendering
import SimplePageHeader from "../components/SimplePageHeader.astro";
import BaseLayout from "../layouts/BaseLayout.astro";
import { getCategoriaInformacionRoadmap, updateCategoriaNombreDescripcion, getAllCategories } from "../database/consultas";

export const prerender = false;

const ModificarContenido = () => {
    const [informacion, setInformacion] = useState(null);
    const [categorias, setCategorias] = useState([]);
    const [selectedCategoria, setSelectedCategoria] = useState('');

    const fetchInformacion = async (categoria) => {
        const data = await getCategoriaInformacionRoadmap(categoria);
        setInformacion(data);
    };

    const handleCategoriaChange = async (event) => {
        const categoria = event.target.value;
        setSelectedCategoria(categoria);
        await fetchInformacion(categoria);
    };

    useEffect(() => {
        const fetchData = async () => {
            const categoriasData = await getAllCategories();
            setCategorias(categoriasData);
        };
        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = new FormData(event.target);
            const categoria = data.get('categoria');
            const descripcion = data.get('descripcion');
            console.log("Categoria:", categoria);
            console.log("Descripcion:", descripcion);
            if (categoria && descripcion) {
                console.log('ha pasado');
                const nose = await updateCategoriaNombreDescripcion('Jira', categoria, descripcion);
                console.log(nose);
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <BaseLayout title='Modificar la información' permalink={'/modificar/Contenido'}>
            <SimplePageHeader
                title='Developer Roadmaps'
                description='Modificar la información/contenido'
            />

            <form onSubmit={handleSubmit}>
                <label>
                    Título:
                    <textarea name="categoria" rows="10" cols="20" value={informacion?.idNombre || ''}></textarea>
                </label>
                <br />
                <label>
                    Descripción:
                    <textarea name="descripcion" rows="10" cols="70" value={informacion?.descripcion || ''}></textarea>
                </label>
                <br />
                <label>
                    Categoría:
                    <select name="categoria" value={selectedCategoria} onChange={handleCategoriaChange}>
                        <option value="">Seleccione una categoría</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.id} value={categoria.id}>{categoria.name}</option>
                        ))}
                    </select>
                </label>
                <br />
                <button>Guardar</button>
            </form>
        </BaseLayout>
    );
};

export default ModificarContenido;
