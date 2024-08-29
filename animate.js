function startAnimation() {
    animatePioneer();
    animateNewEnergy();
    startBlinkingAnimation();
}

function animatePioneer() {
    const route = map.getSource('pioneer-20aug-27aug-data')._data.features[0].geometry.coordinates;
    let step = 0;
    const stepIncrement = 5;
    const animationSpeed = 30;

    function animate() {
        if (step < route.length - stepIncrement) {
            const segment = route.slice(0, step);
            const geojson = {
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates: segment
                }
            };
            map.getSource('pioneer-20aug-27aug-data').setData(geojson);
            step += stepIncrement;
            window.requestId = requestAnimationFrame(animate);
        }
    }

    animate();
}

function animateNewEnergy() {
    const route = map.getSource('newenergy-20-23august-data')._data.features[0].geometry.coordinates;
    let step = 0;
    const stepIncrement = 5;
    const animationSpeed = 30;

    function animate() {
        if (step < route.length - stepIncrement) {
            const segment = route.slice(0, step);
            const geojson = {
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates: segment
                }
            };
            map.getSource('newenergy-20-23august-data').setData(geojson);
            step += stepIncrement;
            window.requestId = requestAnimationFrame(animate);
        }
    }

    animate();
}

function startBlinkingAnimation() {
    const darkstsLayer = 'darksts-point-layer';
    let visibility = true;

    window.blinkingInterval = setInterval(() => {
        map.setPaintProperty(darkstsLayer, 'circle-opacity', visibility ? 1 : 0);
        visibility = !visibility;
    }, 500); // Change every 500ms
}

function stopBlinkingAnimation() {
    if (window.blinkingInterval) {
        clearInterval(window.blinkingInterval);
        window.blinkingInterval = null;
    }
    map.setPaintProperty('darksts-point-layer', 'circle-opacity', 1); // Ensure it's visible when stopping
}

// function startBlinkingAnimation() {
//     const darkstsLayer = 'arctic2-point-layer';
//     let visibility = true;

//     window.blinkingInterval = setInterval(() => {
//         map.setPaintProperty(darkstsLayer, 'circle-opacity', visibility ? 1 : 0);
//         visibility = !visibility;
//     }, 500); // Change every 500ms
// }

// function stopBlinkingAnimation() {
//     if (window.blinkingInterval) {
//         clearInterval(window.blinkingInterval);
//         window.blinkingInterval = null;
//     }
//     map.setPaintProperty('arctic2-point-layer', 'circle-opacity', 1); // Ensure it's visible when stopping
// }