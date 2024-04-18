function getColor(crime) {
    //  Function to determine the color of the marker based on the depth of the earthquake
    return crime > 45000 ? '#800026' :
        crime > 42000 ? '#BD0026' :
            crime > 39000 ? '#E31A1C' :
                crime > 35000 ? '#FC4E2A' :
                    crime > 30000 ? '#FD8D3C' :
                        crime > 25000 ? '#FEB24C' :
                            '#FFEDA0';
}

function GetMarkers(data) {
    // Create an array for each 
    let crimeArray = data.map(crime => ({
        Area_Name: crime.Area_Name,
        Count: parseFloat(crime.Count),
        // store lat and lon as floating point numbers
        Coordinates: [parseFloat(crime.Lat), parseFloat(crime.Lon)]
    }));
    console.log("crimeArray", crimeArray);

    // Loop through the crimeArray and create one circle marker for each crime
    for (let i = 0; i < crimeArray.length; i++) {
        let crime = crimeArray[i];
        let markerRadius = crime.Count * .00055;

        L.circleMarker(crime.Coordinates, {
            radius: markerRadius, // Use the Count to determine the radius
            color: 'blue',
            fillColor: getColor(crime.Count), // Use the Count to determine the color
            fillOpacity: 0.6,
            weight: 1
        })
            .bindPopup(`<h1>${crime.Area_Name}</h1> <hr> <h3>Count: ${crime.Count}</h3>`)
            .addTo(myMap);
    }
}