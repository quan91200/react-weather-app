import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MapUpdater from './MapUpdater'

export const Leaflet = ({ lat, lon }) => {
    return (
        <MapContainer
            className='h-[25rem] w-[80%] mx-auto flex items-center justify-center'
            center={[lat, lon]} // tọa độ từ API thời tiết
            zoom={5}
            zoomControl={false}
        >
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"

            />
            <Marker position={[lat, lon]}>
                <Popup>
                    Weather Location: {lat}, {lon}
                </Popup>
            </Marker>
            <MapUpdater lat={lat} lon={lon} />
        </MapContainer>
    )
}
