import { h } from 'preact';
import { useState } from 'preact/hooks';
import {type ICategoria } from '../../database/dbMySQL';


interface FormProps {
    categoriasNivel1: ICategoria[];
    onSubmit: (formData: any) => void;
}

const FormWithCheckboxes: preact.FunctionalComponent<FormProps> = ({ categoriasNivel1, onSubmit }) => {
    const [formData, setFormData] = useState<{ [key: string]: any }>({});

    const handleCheckboxChange = (e: Event) => {
        const target = e.target as HTMLInputElement;
        const { name, checked } = target;
        setFormData(prevState => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                checked,
                prioridad: checked ? prevState[name]?.prioridad || '' : ''
            }
        }));
    };

    const handlePriorityChange = (e: Event) => {
        const target = e.target as HTMLInputElement;
        const { name, value } = target;
        setFormData(prevState => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                prioridad: value
            }
        }));
    };

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        const preparedData = {
            ...formData,
            titulo: formData.titulo,
            descripcion: formData.descripcion
        };
        onSubmit(preparedData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Titulo:</label>
            <input type="text" name="titulo" required onChange={(e) => e.target && setFormData({ ...formData, titulo: (e.target as HTMLInputElement).value })} />

            <label>Descripción:</label>
            <textarea name="descripcion" rows={4} cols={60} required onChange={(e) => e.target && setFormData({ ...formData, descripcion: (e.target as HTMLTextAreaElement).value })}></textarea>

            <fieldset>
                <div className="checkbox-container">
                    <label>Categorías:</label>
                    {categoriasNivel1.map((categoria) => (
                        <div className="checkbox-item" key={categoria.idNombre}>
                            <input type="checkbox" id={categoria.idNombre} name={categoria.idNombre} onChange={handleCheckboxChange} />
                            <label htmlFor={categoria.idNombre}>{categoria.idNombre}</label>
                            {formData[categoria.idNombre]?.checked && (
                                <>
                                    <label>Orden (opcional):</label>
                                    <input
                                        type="number"
                                        name={`prioridad-${categoria.idNombre}`}
                                        min="1"
                                        value={formData[categoria.idNombre]?.prioridad || ''}
                                        onChange={handlePriorityChange}
                                    />
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </fieldset>

            <button type="submit">Crear y guardar</button>
        </form>
    );
};

export default FormWithCheckboxes;
