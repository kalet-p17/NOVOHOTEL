import RoomCard from "../components/RoomCard";
import {rooms} from "../components/data/rooms";
import "./Rooms.css";

 function Rooms() {
    return(
        <section id="Rooms" className="Rooms-section">
            <h2>Nuestras habitaciones</h2>
            <div className="Rooms-grid">
                {rooms.map(room => (
                    <RoomCard 
                    key={room.id}
                    img={room.img}
                    title={room.title}
                    price={room.price}
                    descripcion={room.descripcion}
                    />
                ))}
            </div>
        </section> 
    )
    };
 export default Rooms;