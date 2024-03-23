// Function to calculate distance between two coordinates using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180; // Convert degrees to radians
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c; // Distance in kilometers
    return distance;
}

// Function to find nearby EV stations
export function findNearbyEVStations(chargingStationsData, userLat, userLon, radius) {
    // Filter nearby stations
    const nearbyStations = chargingStationsData.map(station => ({
        ...station,
        latitude: parseFloat(station.Latitude),
        longitude: parseFloat(station.Longitude),
    })).filter(station => {
        const distance = calculateDistance(userLat, userLon, station.latitude, station.longitude);
        return distance <= radius;
    });

    // Return nearby stations data
    return nearbyStations;
}
