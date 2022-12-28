function consultar() {
    const id = document.getElementById("id-consulta").value;
    fetch(`http://localhost:8080/parking-spot/${id}`)
        .then(response => response.json())
        .then(data => console.log(`SpotNumber: ${response.parkingSpotNumber}`));
}


      