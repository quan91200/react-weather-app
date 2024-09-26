import { useMap } from 'react-leaflet'
import { useEffect } from 'react'

const MapUpdater = ({ lat, lon }) => {
    const map = useMap()

    useEffect(() => {
        if (lat && lon) {
            map.setView([lat, lon], 13); // Di chuyển bản đồ đến vị trí mới
        }
    }, [lat, lon, map])

    return null; // Component này không cần render gì cả
}
export default MapUpdater
