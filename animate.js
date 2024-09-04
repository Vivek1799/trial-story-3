function startAnimation() {
    animatePioneer();
    animateNewEnergy();
    startBlinkingAnimation('darksts-point-layer');
    startBlinkingAnimation('darksts2samfsu-point-layer');
}

function animatePioneer() {
    const source = map.getSource('pioneer-20aug-27aug-data');
    if (!source || !source._data.features.length) return;

    const route = source._data.features[0].geometry.coordinates;
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
        } else {
            cancelAnimationFrame(window.requestId); // Stop animation when route ends
        }
    }

    animate();
}

function animateNewEnergy() {
    const source = map.getSource('newenergy-20-23august-data');
    if (!source || !source._data.features.length) return;

    const route = source._data.features[0].geometry.coordinates;
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
        } else {
            cancelAnimationFrame(window.requestId); // Stop animation when route ends
        }
    }

    animate();
}

function startBlinkingAnimation(layerId) {
    let visibility = true;

    window.blinkingIntervals = window.blinkingIntervals || {};
    window.blinkingIntervals[layerId] = setInterval(() => {
        map.setPaintProperty(layerId, 'circle-opacity', visibility ? 1 : 0);
        visibility = !visibility;
    }, 500); // Change every 500ms
}

function stopBlinkingAnimation() {
    if (window.blinkingIntervals) {
        Object.keys(window.blinkingIntervals).forEach(layerId => {
            clearInterval(window.blinkingIntervals[layerId]);
            map.setPaintProperty(layerId, 'circle-opacity', 1); // Ensure it's visible when stopping
        });
        window.blinkingIntervals = {};
    }
}

