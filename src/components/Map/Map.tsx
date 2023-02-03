import React, { useEffect } from 'react';
import './Map.styles.scss';
import * as tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';

type MapProps = {
    long: number,
    lat: number
}

const Map = ({ long, lat }: MapProps) => {

    useEffect(() => {
        let map = tt.map({
            key: import.meta.env.VITE_TOMTOM_API_KEY,
            container: 'map-container',
            center: [long, lat + 0.0005],
            zoom: 17,
            interactive: true,
        });

        function addMarker() {
            const element = document.createElement('div');
            element.id = 'marker';
            const marker = new tt.Marker({
                draggable: false,
                element: element
            }).setLngLat([long, lat]).addTo(map);
        }
        addMarker();
    }, []);

    return <div id='map-container'></div>;
};

export default Map;