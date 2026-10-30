document.getElementById('btnAbrir').addEventListener('click', () => {
    let lat = document.getElementById('latitud').value.replace(',', '.');
    let lng = document.getElementById('longitud').value.replace(',', '.');

    if (lat && lng) {
        const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
        window.open(url, '_blank');
    } else {
        alert('Por favor ingrese valores válidos de latitud y longitud.');
    }
});