
const qiblaDirection = (req) => {
    const qiblaLat = 21.4225
    const qiblaLng = 39.8262
    const lat = req.query.lat
    const lng = req.query.lng
    var bearTo = bearingTo(lat, lng, qiblaLat, qiblaLng);
    if (bearTo < 0) {
        bearTo = bearTo + 360;
    }
    const bear = {angle: bearTo};
    return bear;
}

function bearingTo(Lat, Lng, endLat, endLng) {
    const kaabaLat = endLat; // Lat of the Kaaba
    const kaabaLng = endLng; // Lng of the Kaaba
  
    const LatRad = (Lat * Math.PI) / 180; // convert Lat to radians
    const LngRad = (Lng * Math.PI) / 180; // convert Lng to radians
    const kaabaLatRad = (kaabaLat * Math.PI) / 180; // convert Kaaba Lat to radians
    const kaabaLngRad = (kaabaLng * Math.PI) / 180; // convert Kaaba Lng to radians
    
    const y = Math.sin(kaabaLngRad - LngRad);
    const x = Math.cos(LatRad) * Math.tan(kaabaLatRad) - Math.sin(LatRad) * Math.cos(kaabaLngRad - LngRad);
    const qiblaDirection = Math.atan2(y, x);
    
    const qiblaDirectionDeg = (qiblaDirection * 180) / Math.PI; // convert Qibla direction to degrees
    return qiblaDirectionDeg;
}

module.exports = {
    qiblaDirection,
    bearingTo
}
