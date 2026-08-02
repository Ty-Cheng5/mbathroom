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
    ['newest', 'Newest'],
];

function Home() {
    // Remembers which sort button is picked. Starts on "distance". Right now it only
    // changes which button looks highlighted, since there's no list of bathrooms yet.
    const [sort, setSort] = useState('distance');

    // Holds whatever is typed in the search box. Starts empty. Like the sort buttons,
    // it doesn't filter anything yet since there's no list of bathrooms to search.
    const [query, setQuery] = useState('');

    // Points at the empty div further down where the map gets drawn.
    const mapRef = useRef(null);

    // The empty [] at the end means this only runs once, when the page first loads,
    // so we don't build a new map every time the page redraws.
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

            {/* Top row: title on the left, sort buttons on the right. */}
            <div className="filter-bar">
                {/* Search bar. The magnifying glass is just a drawing, so clicks on it
                    pass through to the box behind it and put the cursor in the box. */}
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

                {/* Sort buttons. Clicking one saves it with setSort, and the page
                    redraws so that button turns blue. */}
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

            {/* Two columns: reviews on the left (empty for now), map on the right.
                Home.css puts them side by side. */}
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