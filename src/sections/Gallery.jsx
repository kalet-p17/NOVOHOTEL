import React, { useState } from "react";
import {gallery} from "../data/gallery";
import "./Gallery.css";

export default function Gallery() {
    const [selected, setSelected] = useState(null);
    
    return (       
        <section className="gallery-section">
            <h2>Galería</h2>
            <div className="mosaico">
                {gallery.map((items) => (
                    <img
                    key={items.id}
                    src={items.url}
                    alt={`foto ${items.id}`}
                    className="thumb"
                    onClick={() => setSelected(items.url)}
                    />
                    
                

                ))}
            </div>
            {selected && (
                <div className="lightbox" onClick={() => setSelected(null)}>
                    <img src="selected" alt="Ampliada" className="lightbox-img"/>
                    <span className="close">&times</span>
                    
                </div>
            )}
        </section>
  );
}