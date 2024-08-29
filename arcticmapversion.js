mapboxgl.accessToken = 'pk.eyJ1Ijoidml2ZWtwYXRpbDE3IiwiYSI6ImNseHV4bzJoMzFycXgybG9tN3ptZXd1d2QifQ.wbdQPBUeYDHlbwnmgHHI9g';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/vivekpatil17/clzvsorxp003d01o1hxf5553g',
    center: [0, 0], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

map.on('load', function () {
    // Add the pioneer layer
    map.addSource('pioneer-data', {
        type: 'geojson',
        data: 'finalviz-pioneertanker.geojson' // Ensure this path is correct
    });

    map.addLayer({
        id: 'pioneer-layer',
        type: 'line',
        source: 'pioneer-data',
        layout: {
            'visibility': 'none' // Initially hide the layer
        },
        paint: {
            'line-color': '#75baff', // Blue color for the line
            'line-width': 1.5
        }
    });

    // Add the arctic2 point layer
    map.addSource('arctic2-data', {
        type: 'geojson',
        data: 'arctic2.json' // Ensure this path is correct
    });

    map.addLayer({
        id: 'arctic2-point-layer',
        type: 'circle', // Use 'circle' type for point layers
        source: 'arctic2-data',
        layout: {
            'visibility': 'none' // Initially hide the layer
        },
        paint: {
            'circle-radius': 10, // Size of the point
            'circle-color': '#ff5c5c', // Red color for the point
            'circle-opacity': 1 // Start fully opaque
        }
    });

    // Add the arctic2 label layer
    map.addLayer({
        id: 'arctic2-label-layer',
        type: 'symbol',
        source: 'arctic2-data',
        layout: {
            'visibility': 'none', // Initially hide the layer
            'text-field': 'Arctic 2', // The text to display
            'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'], // Font for the text
            'text-size': 12, // Size of the text
            'text-offset': [0, 1.5], // Offset to position the label near the point
            'text-anchor': 'top' // Position the text above the point
        },
        paint: {
            'text-color': '#d1b494' // Color for the text
        }
    });

    // Add the asya path layer
    map.addSource('asya-path-data', {
        type: 'geojson',
        data: 'asya-path.geojson' // Ensure this path is correct
    });

    map.addLayer({
        id: 'asya-path-layer',
        type: 'line',
        source: 'asya-path-data',
        layout: {
            'visibility': 'none' // Initially hide the layer
        },
        paint: {
            'line-color': '#00cc11', // Green color for the line
            'line-width': 1.5
        }
    });

    // Add the asya jan-june path layer
    map.addSource('asyajan-june-data', {
        type: 'geojson',
        data: 'asyajan-june.geojson' // Ensure this path is correct
    });

    map.addLayer({
        id: 'asyajan-june-layer',
        type: 'line',
        source: 'asyajan-june-data',
        layout: {
            'visibility': 'none' // Initially hide the layer
        },
        paint: {
            'line-color': '#00cc11', 
            'line-width': 1.5
        }
    });

    // Add the asyajune-25june layer
    map.addSource('asyajune-25june-data', {
        type: 'geojson',
        data: 'asyajune-25june.geojson' // Ensure this path is correct
    });

    map.addLayer({
        id: 'asyajune-25june-layer',
        type: 'line',
        source: 'asyajune-25june-data',
        layout: {
            'visibility': 'none' // Initially hide the layer
        },
        paint: {
            'line-color': '#00cc11', 
            'line-width': 1.5
        }
    });

    // Add the asyajune-july layer
    map.addSource('asyajune-july-data', {
        type: 'geojson',
        data: 'asyajune-july.geojson' // Ensure this path is correct
    });

    map.addLayer({
        id: 'asyajune-july-layer',
        type: 'line',
        source: 'asyajune-july-data',
        layout: {
            'visibility': 'none' // Initially hide the layer
        },
        paint: {
            'line-color': '#00cc11', 
            'line-width': 1.5
        }
    });

    // Add the everest20-25august layer
    map.addSource('everest20-25august-data', {
        type: 'geojson',
        data: 'everest20-25august.geojson' // Ensure this path is correct
    });

    map.addLayer({
        id: 'everest20-25august-layer',
        type: 'line',
        source: 'everest20-25august-data',
        layout: {
            'visibility': 'none' // Initially hide the layer
        },
        paint: {
            'line-color': '#d1b200', // Gold color for the line
            'line-width': 1.5
        }
    });

    // Add the everest-energy(1jan-14thaugust) layer
    map.addSource('everest-energy-1jan-14august-data', {
        type: 'geojson',
        data: 'everest-energy(1jan-14thaugust).geojson' // Ensure this path is correct
    });

    map.addLayer({
        id: 'everest-energy-1jan-14august-layer',
        type: 'line',
        source: 'everest-energy-1jan-14august-data',
        layout: {
            'visibility': 'none' // Initially hide the layer
        },
        paint: {
            'line-color': '#d1b200', // Gold color for the line
            'line-width': 1.5
        }
    });

    // Add the pioneer(20aug-27aug) layer
    map.addSource('pioneer-20aug-27aug-data', {
        type: 'geojson',
        data: 'pioneer(20aug-27aug).geojson' // Ensure this path is correct
    });

    map.addLayer({
        id: 'pioneer-20aug-27aug-layer',
        type: 'line',
        source: 'pioneer-20aug-27aug-data',
        layout: {
            'visibility': 'none' // Initially hide the layer
        },
        paint: {
            'line-color': '#75baff', // Blue color for the line
            'line-width': 1.5
        }
    });

    // Add the newenergy(20-23august) layer
    map.addSource('newenergy-20-23august-data', {
        type: 'geojson',
        data: 'newenergy(20-23august).geojson' // Ensure this path is correct
    });

    map.addLayer({
        id: 'newenergy-20-23august-layer',
        type: 'line',
        source: 'newenergy-20-23august-data',
        layout: {
            'visibility': 'none' // Initially hide the layer
        },
        paint: {
            'line-color': '#27c0ce', 
            'line-width': 1.5
        }
    });

    // Add the darksts.json point layer
    map.addSource('darksts-data', {
        type: 'geojson',
        data: 'darksts.json' // Ensure this path is correct
    });

    map.addLayer({
        id: 'darksts-point-layer',
        type: 'circle', // Use 'circle' for a point layer
        source: 'darksts-data',
        layout: {
            'visibility': 'none' // Initially hide the layer
        },
        paint: {
            'circle-radius': 7, // Adjust the size of the point
            'circle-color': '#ff6347', // Set the color of the point (Tomato Red)
            'circle-stroke-width': 1.5,
            'circle-stroke-color': '#ffffff' // White border around the point
        }
    });

        // Add a label for the darksts.json point layer
        map.addLayer({
            id: 'darksts-label-layer',
            type: 'symbol',
            source: 'darksts-data',
            layout: {
                'visibility': 'none', // Initially hide the layer
                'text-field': ['get', 'name'], // Use the 'name' property for the label text
                'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'], // Font for the text
                'text-size': 12, // Size of the text
                'text-offset': [0, 1.5], // Offset to position the label above the point
                'text-anchor': 'top' // Position the text above the point
            },
            paint: {
                'text-color': '#ffffff' // Color of the text
            }
        });
    
        // Initialize Scrollama
        initScrollama();
    });
    
    function initScrollama() {
        const scroller = scrollama();
    
        scroller
            .setup({
                step: '.step',
                offset: 0.5,
                progress: true
            })
            .onStepEnter(response => {
                const chapter = response.element.id;
                handleStepEnter(chapter);
                response.element.classList.add('active');
            })
            .onStepExit(response => {
                const chapter = response.element.id;
                handleStepExit(chapter);
                response.element.classList.remove('active');
            });
    
        window.addEventListener('resize', scroller.resize);
    }
    
    function updateLegend(items) {
        const legendElement = document.getElementById('legend');
        if (legendElement) {
            const legendList = document.getElementById('legend-list');
            legendList.innerHTML = ''; // Clear the existing legend
    
            items.forEach(item => {
                const listItem = document.createElement('li');
                const colorBox = document.createElement('div');
                colorBox.className = 'legend-color-box';
                colorBox.style.backgroundColor = item.color;
                listItem.appendChild(colorBox);
                listItem.appendChild(document.createTextNode(item.label));
                legendList.appendChild(listItem);
            });
    
            legendElement.style.display = 'block'; // Ensure the legend is visible
        }
    }
    
    function handleStepEnter(chapter) {
        const clockElement = document.getElementById('clock');
        const legendElement = document.getElementById('legend');
    
        switch (chapter) {
            case 'chapter-1':
                map.flyTo({ center: [59.38618, 71.89288], zoom: 2, pitch: 6, bearing: 7.20 });
                if (clockElement) clockElement.style.display = 'none';
                if (legendElement) legendElement.style.display = 'none';
                hideAllLayers();
                stopBlinkingAnimation();
                break;
    
            case 'chapter-2':
                map.flyTo({ center: [28.29103, 71.51573], zoom: 3.9, pitch: 0, bearing: -10.18 });
                if (clockElement) clockElement.style.display = 'block';
                updateClock('From 15th July - 6th August 2024');
                updateLegend([
                    { color: '#75baff', label: 'Pioneer Energy Path' }
                ]);
                map.setLayoutProperty('pioneer-layer', 'visibility', 'visible');
                hideOtherLayers(['pioneer-layer']);
                stopBlinkingAnimation();
                break;
    
            case 'chapter-3':
                map.flyTo({ center: [58.86907, 71.03377], zoom: 3.9, pitch: 0, bearing: -10.18 });
                if (clockElement) clockElement.style.display = 'block';
                updateClock('On 1st August 2024');
                updateLegend([
                    { color: '#75baff', label: 'Pioneer Energy Path' },
                ]);
                map.setLayoutProperty('pioneer-layer', 'visibility', 'visible');
                map.setLayoutProperty('arctic2-point-layer', 'visibility', 'visible');
                map.setLayoutProperty('arctic2-label-layer', 'visibility', 'visible');
                hideOtherLayers(['pioneer-layer', 'arctic2-point-layer', 'arctic2-label-layer']);
                startBlinkingAnimation();
                break;
    
            case 'chapter-4':
                map.flyTo({ center: [28.29103, 71.51573], zoom: 3.9, pitch: 0, bearing: -10.18 });
                if (clockElement) clockElement.style.display = 'block';
                updateClock('From 2nd August - 15th August 2024');
                updateLegend([
                    { color: '#00cc11', label: 'Asya Energy Path' }
                ]);
                map.setLayoutProperty('asya-path-layer', 'visibility', 'visible');
                hideOtherLayers(['asya-path-layer']);
                stopBlinkingAnimation();
                break;
    
            case 'chapter-5':
                map.flyTo({ center: [58.86907, 71.03377], zoom: 3.9, pitch: 0, bearing: -10.18 });
                if (clockElement) clockElement.style.display = 'block';
                updateClock('On 11th August 2024');
                updateLegend([
                    { color: '#00cc11', label: 'Asya Energy Path' }
                ]);
                map.setLayoutProperty('arctic2-point-layer', 'visibility', 'visible');
                map.setLayoutProperty('arctic2-label-layer', 'visibility', 'visible');
                map.setLayoutProperty('asya-path-layer', 'visibility', 'visible');
                hideOtherLayers(['arctic2-point-layer', 'arctic2-label-layer', 'asya-path-layer']);
                startBlinkingAnimation();
                break;
    
            case 'chapter-6':
                map.flyTo({ center: [48.97317, 70.64653], zoom: 4.17, pitch: 0, bearing: -10.18 });
                if (clockElement) clockElement.style.display = 'block';
                updateClock('Asya Energy: 2-15 August 2024/ Pioneer: 15 July-6th August 2024');
                updateLegend([
                    { color: '#d1b200', label: 'Everest Energy Path' }
                ]);
                map.setLayoutProperty('arctic2-point-layer', 'visibility', 'visible');
                map.setLayoutProperty('arctic2-label-layer', 'visibility', 'visible');
                map.setLayoutProperty('everest20-25august-layer', 'visibility', 'visible');
                hideOtherLayers(['arctic2-point-layer', 'arctic2-label-layer', 'everest20-25august-layer']);
                startBlinkingAnimation();
                break;
    
            case 'chapter-7':
                map.flyTo({ center: [38.15392, 72.45775], zoom: 4.8, pitch: 0, bearing: -10.18 });
                if (clockElement) clockElement.style.display = 'block';
                updateClock('Asya Energy: 2-15 August 2024/ Pioneer: 15 July-6th August 2024/ Everest Energy: 19 -26 August 2024');
                updateLegend([
                    { color: '#75baff', label: 'Pioneer Energy Path' },
                    { color: '#d1b200', label: 'Everest Energy Path' },
                    { color: '#00cc11', label: 'Asya Energy Path' }
                ]);
                map.setLayoutProperty('pioneer-layer', 'visibility', 'visible');
                map.setLayoutProperty('everest20-25august-layer', 'visibility', 'visible');
                map.setLayoutProperty('asya-path-layer', 'visibility', 'visible');
                stopBlinkingAnimation();
                break;
    
            case 'chapter-8':
                map.flyTo({ center: [68.10619, 17.51712], zoom: 3.36, pitch: 2, bearing: 0 });
                if (clockElement) clockElement.style.display = 'block';
                updateClock('15 July-15 August 2024');
                updateLegend([
                    { color: '#75baff', label: 'Pioneer Path' },
                    { color: '#00cc11', label: 'Asya Path' },
                    { color: '#ff6347', label: 'Asya Jan-June Path' }
                ]);
                map.setLayoutProperty('pioneer-layer', 'visibility', 'visible');
                map.setLayoutProperty('asya-path-layer', 'visibility', 'visible');
                map.setLayoutProperty('asyajan-june-layer', 'visibility', 'visible');
                hideOtherLayers(['pioneer-layer', 'asya-path-layer', 'asyajan-june-layer']);
                stopBlinkingAnimation();
                break;
    
                case 'chapter-9':
                    map.flyTo({ center: [48.49182, 24.24954], zoom: 4.00, pitch: 0, bearing: 0 });
                    if (clockElement) clockElement.style.display = 'block';
                    updateClock('15 July-15 August 2024');
                    updateLegend([
                        { color: '#75baff', label: 'Pioneer Path' },
                        { color: '#00cc11', label: 'Asya Path' },
                        { color: '#ff6347', label: 'Asya Jan-June Path' },
                        { color: '#8a2be2', label: 'Asya June-25 June Path' }
                    ]);
                    map.setLayoutProperty('pioneer-layer', 'visibility', 'visible');
                    map.setLayoutProperty('asya-path-layer', 'visibility', 'visible');
                    map.setLayoutProperty('asyajan-june-layer', 'visibility', 'visible');
                    map.setLayoutProperty('asyajune-25june-layer', 'visibility', 'visible');
                    hideOtherLayers(['pioneer-layer', 'asya-path-layer', 'asyajan-june-layer', 'asyajune-25june-layer']);
                    stopBlinkingAnimation();
                    break;
        
                case 'chapter-10':
                    map.flyTo({ center: [14.71961, 38.67919], zoom: 4.29, pitch: 0, bearing: 0 });
                    if (clockElement) clockElement.style.display = 'block';
                    updateClock('15 July-15 August 2024');
                    updateLegend([
                        { color: '#75baff', label: 'Pioneer Path' },
                        { color: '#00cc11', label: 'Asya Path' },
                        { color: '#ff6347', label: 'Asya Jan-June Path' },
                        { color: '#FFD700', label: 'Asya June-July Path' }
                    ]);
                    map.setLayoutProperty('pioneer-layer', 'visibility', 'visible');
                    map.setLayoutProperty('asya-path-layer', 'visibility', 'visible');
                    map.setLayoutProperty('asyajan-june-layer', 'visibility', 'visible');
                    map.setLayoutProperty('asyajune-july-layer', 'visibility', 'visible');
                    map.setLayoutProperty('everest-energy-1jan-14august-layer', 'visibility', 'none');
                    stopBlinkingAnimation();
                    break;
        
                case 'chapter-11':
                    map.flyTo({ center: [26.33921, 38.49713], zoom: 3.13, pitch: 38.50, bearing: 24.00 });
                    if (clockElement) clockElement.style.display = 'block';
                    updateClock('1 Jan - 14 August 2024');
                    updateLegend([
                        { color: '#00cc11', label: 'Asya Energy Path' },
                        { color: '#d1b200', label: 'Everest Energy Path' }
                    ]);
                    map.setLayoutProperty('pioneer-layer', 'visibility', 'visible');
                    map.setLayoutProperty('asya-path-layer', 'visibility', 'visible');
                    map.setLayoutProperty('asyajan-june-layer', 'visibility', 'visible');
                    map.setLayoutProperty('asyajune-25june-layer', 'visibility', 'visible');
                    map.setLayoutProperty('asyajune-july-layer', 'visibility', 'visible');
                    map.setLayoutProperty('everest-energy-1jan-14august-layer', 'visibility', 'visible');
                    hideOtherLayers([
                        'pioneer-layer',
                        'asya-path-layer',
                        'asyajan-june-layer',
                        'asyajune-25june-layer',
                        'asyajune-july-layer',
                        'everest-energy-1jan-14august-layer'
                    ]);
                    stopBlinkingAnimation();
                    break;
        
                case 'chapter-12':
                    map.flyTo({ center: [32.56328, 31.61020], zoom: 8.6, pitch: 0, bearing: 0 });
                    if (clockElement) clockElement.style.display = 'block';
                    updateClock('Pioneer: 20-27 August 2024/ New Energy: 20-27 August 2024');
                    updateLegend([
                        { color: '#75baff', label: 'Pioneer Path' },
                        // { color: '#00cc11', label: 'Asya Path' },
                        // { color: '#ff6347', label: 'Asya Jan-June Path' },
                        // { color: '#FFD700', label: 'Asya June-July Path' },
                        { color: '#27c0ce', label: 'New Energy Path' }
                    ]);
                    map.setLayoutProperty('pioneer-20aug-27aug-layer', 'visibility', 'visible');
                    map.setLayoutProperty('newenergy-20-23august-layer', 'visibility', 'visible');
                    map.setLayoutProperty('darksts-point-layer', 'visibility', 'visible');
                    map.setLayoutProperty('everest-energy-1jan-14august-layer', 'visibility', 'none');
                    map.setLayoutProperty('asyajune-25june-layer', 'visibility', 'none');
                    map.setLayoutProperty('asyajune-july-layer', 'visibility', 'none');
                    map.setLayoutProperty('darksts-label-layer', 'visibility', 'visible');
                    startAnimation(); // Start the animation for Pioneer and NewEnergy
                    hideOtherLayers([
                        'pioneer-20aug-27aug-layer',
                        'newenergy-20-23august-layer',
                        'darksts-point-layer'
                    ]);
                    break;
        
                    case 'chapter-13':
                        // Switch to the custom style for Chapter 13
                        map.setStyle('mapbox://styles/vivekpatil17/cm073h7dq011s01qqh41tb2bw');
                    
                        map.once('styledata', () => {
                            // Re-add necessary layers after style change
                            map.addSource('arctic2-data', {
                                type: 'geojson',
                                data: 'arctic2.json'
                            });
                    
                            map.addLayer({
                                id: 'arctic2-point-layer',
                                type: 'circle',
                                source: 'arctic2-data',
                                paint: {
                                    'circle-radius': 10,
                                    'circle-color': '#ff5c5c',
                                    'circle-opacity': 1
                                }
                            });
                    
                            map.addLayer({
                                id: 'arctic2-label-layer',
                                type: 'symbol',
                                source: 'arctic2-data',
                                layout: {
                                    'text-field': 'Arctic 2',
                                    'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
                                    'text-size': 12,
                                    'text-offset': [0, 1.5],
                                    'text-anchor': 'top'
                                },
                                paint: {
                                    'text-color': '#d1b494'
                                }
                            });
                    
                            // Fly to the location specific for Chapter 13
                            map.flyTo({ center: [73.83493, 70.99919], zoom: 13, pitch: 0, bearing: 0 });
                    
                            if (clockElement) clockElement.style.display = 'none';
                            updateLegend([
                                { color: '#ff5c5c', label: 'Arctic 2 Point' }
                            ]);
                            hideOtherLayers(['arctic2-point-layer', 'arctic2-label-layer']);
                            stopAnimation();
                            stopBlinkingAnimation();
                        });
                        break;
                    
                    case 'chapter-14':
                        // Revert back to the original style
                        map.setStyle('mapbox://styles/vivekpatil17/clzvsorxp003d01o1hxf5553g');
                    
                        map.once('styledata', () => {
                            // Re-add necessary layers after reverting style
                            setupMapLayers(); // This function should re-add all layers
                    
                            // Fly to the location specific for Chapter 14
                            map.flyTo({ center: [66.97571, 43.85848], zoom: 2.6, pitch: 0.51, bearing: 0 });
                    
                            if (clockElement) clockElement.style.display = 'none';
                            if (legendElement) legendElement.style.display = 'none';
                            hideAllLayers();
                            stopAnimation();
                            stopBlinkingAnimation();
                        });
                        break;
            }
        }
        
        function hideOtherLayers(visibleLayers) {
            const allLayers = [
                'pioneer-layer',
                'arctic2-point-layer',
                'arctic2-label-layer',
                'asya-path-layer',
                'asyajan-june-layer',
                'asyajune-25june-layer',
                'asyajune-july-layer',
                'everest20-25august-layer',
                'everest-energy-1jan-14august-layer',
                'pioneer-20aug-27aug-layer',
                'newenergy-20-23august-layer',
                'darksts-point-layer',
                'darksts-label-layer'
            ];
            
            allLayers.forEach(layer => {
                if (!visibleLayers.includes(layer)) {
                    map.setLayoutProperty(layer, 'visibility', 'none');
                }
            });
        }
        
        function hideAllLayers() {
            const allLayers = [
                'pioneer-layer',
                'arctic2-point-layer',
                'arctic2-label-layer',
                'asya-path-layer',
                'asyajan-june-layer',
                'asyajune-25june-layer',
                'asyajune-july-layer',
                'everest20-25august-layer',
                'everest-energy-1jan-14august-layer',
                'pioneer-20aug-27aug-layer',
                'newenergy-20-23august-layer',
                'darksts-point-layer',
                'darksts-label-layer'
            ];
            
            allLayers.forEach(layer => {
                map.setLayoutProperty(layer, 'visibility', 'none');
            });
        }
        
        function handleStepExit(chapter) {
            stopAnimation(); // Ensure this function stops the current animation
        }
        
        function updateClock(timeString) {
            const clockElement = document.getElementById('clock');
            if (clockElement) {
                clockElement.innerText = timeString;
            } else {
                console.warn('Clock element not found');
            }
        }
        
        function stopAnimation() {
            if (window.requestId) {
                cancelAnimationFrame(window.requestId);
                window.requestId = null;
            }
        }
        
        function stopBlinkingAnimation() {
            // Implement any logic you need to stop the blinking animation here
            if (window.blinkingInterval) {
                clearInterval(window.blinkingInterval);
                window.blinkingInterval = null;
            }
        }