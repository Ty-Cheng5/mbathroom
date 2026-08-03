// useState remembers the picked sort option. useRef and useEffect set up the map.
import { useEffect, useRef, useState } from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';



// The three sort buttons. Each one has a name we use in the code and a name the user sees,
// so we can change the button text later without breaking anything.
const SORT_OPTIONS = [
    ['distance', 'Distance'],
    ['rating', 'Rating'],
    ['favorite', 'Favorite'],
];

const GENDER_OPTIONS = [
    ['all', 'All'],
    ['men', 'Men'],
    ['women', 'Women'],
    ['ginc', 'Gender-Inclusive'],

];

function Home() {
    // Default option
    const [sort, setSort] = useState('distance');
    const [gender, setGender] = useState('all');

    // Holds whatever is typed in the search box. Starts empty. Like the sort buttons,
    // it doesn't filter anything yet since there's no list of bathrooms to search.
    const [query, setQuery] = useState('');

    // Points at the empty div further down where the map gets drawn.
    const mapRef = useRef(null);

    useEffect(() => {
        const map = L.map(mapRef.current).setView([42.2808, -83.7430], 15); // lat, lng, zoom

        // The actual map images. This one is the plain light gray style
        // instead of the default colorful OpenStreetMap look.
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        subdomains: 'abcd'
        }).addTo(map);

        // Deletes the map when leaving the page.
        return () => map.remove();
    }, []);

    return (
        <div className="home-page">
            <Navbar/>

            <div className="filter-bar">
                <div className="home-heading">
                    <div className="home-eyebrow">Near you · Ann Arbor</div>
                    <h1 className="home-title">Bathrooms Closest To You</h1>
                </div>
                <div className="search-bar">
                    <svg className="search-icon" viewBox="0 0 16 16" aria-hidden="true">
                        <circle cx="7" cy="7" r="5" />
                        <line x1="10.5" y1="10.5" x2="14" y2="14" />
                    </svg>
                    <input
                        type="search"
                        className="search-input"
                        placeholder="Search bathrooms or buildings"
                        value={query}
                        // Runs on every keystroke and saves what's typed into `query`.
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                <div className="sort-control">
                    <span className="sort-label">Gender</span>
                    <div className="sort-toggle">
                        {GENDER_OPTIONS.map(([value, label]) => (
                            <button
                                key={value}
                                type="button"
                                // Compares against `gender`, not `sort`, so this row
                                // highlights on its own.
                                className={gender === value ? 'sort-btn sort-btn-active' : 'sort-btn'}
                                onClick={() => setGender(value)}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="sort-control">
                    <span className="sort-label">Sort</span>
                    <div className="sort-toggle">
                        {SORT_OPTIONS.map(([value, label]) => (
                            <button
                                key={value}
                                type="button"
                                // Only the picked button gets the extra "sort-btn-active" style.
                                className={sort === value ? 'sort-btn sort-btn-active' : 'sort-btn'}
                                onClick={() => setSort(value)}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="rate-leaflet">
                <div className="rate">

                </div>
                <div ref={mapRef} className="leaflet"></div>

            </div>


        </div>
    );
}

export default Home;