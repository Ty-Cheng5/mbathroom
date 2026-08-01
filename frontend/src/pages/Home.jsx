import { useEffect, useRef } from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';



function Home() {
    const mapRef = useRef(null);

    useEffect(() => {
        const map = L.map(mapRef.current).setView([42.2808, -83.7430], 15); // lat, lng, zoom
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        return () => map.remove();
    }, []);

    return (
        <div>
            <Navbar/>
            <div className="filter-bar">
                <h1>Search</h1>

            </div>
            <div className="rate-leaflet">
                <div className="rate">

                </div>
                <div ref={mapRef} className="leaflet">

                </div>

            </div>


        </div>
    );
}

export default Home;