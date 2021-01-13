let info = {};

info.timestamp = Date.now();
info.uuid = 'ac485815-dd62-47ab-bbcc-7e54e292f458';
document.querySelector('#info').innerHTML = JSON.stringify(info);

navigator.geolocation.getCurrentPosition(
    pos => {
        info.location = {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
        };
        document.querySelector('#info').innerHTML = JSON.stringify(info);
    }
);
