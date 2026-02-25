

import { useState } from 'react';
import './Contact.css';

export default function Contact() {
    const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value}));
          
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!form.nombre.trim()) { newErrors.nombre = 'El nombre es requerido'; }
        if (!form.email.trim()) { newErrors.email = 'El email es requerido'; }
        else if (!/\S+@\S+\.\S+/.test(form.email)) { newErrors.email = 'El email no es válido'; }
        if (!form.mensaje.trim()) { newErrors.mensaje = 'El mensaje es requerido'; }
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setSent(true);
            setForm({ nombre: '', email: '', mensaje: '' });
            //oculta el mensaje de éxito después de 4 segundos
            setTimeout(() => setSent(false), 4000);
        }else {
            setErrors(newErrors);
        }
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2>aqui ira el contanto de la pagina</h2>
    <form onSubmit={handleSubmit}>
        <fieldset className="contact-form">
        <h2>contacto</h2>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange} required />
            {errors.nombre && <span className="error">{errors.nombre}</span>}

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
            {errors.email && <span className="error">{errors.email}</span>}

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" value={form.mensaje} onChange={handleChange} required></textarea>
            {errors.mensaje && <span className="error">{errors.mensaje}</span>}

            <button className='btn-contact' type="submit">Enviar</button>
        </fieldset>
    </form>
            </div>


        </section>
    );
}
