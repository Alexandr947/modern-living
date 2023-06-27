

	
	var myMap;
	
	function init() {
	
		myMap = new ymaps.Map("map", {
			center: [41.3775937395337,2.142945974295535], // Координаты центра карты
			zoom: 13, // Маштаб карты
            controls: ['zoomControl']
		}); 
	
		myMap.controls.add(
			new ymaps.control.ZoomControl()  // Добавление элемента управления картой
		); 
	
		myPlacemark = new ymaps.Placemark([41.3775937395337,2.142945974295535], { // Координаты метки объекта
			balloonContent: "<div class='ya_map'>Заезжайте в гости!</div>" // Подсказка метки
		}, {
			iconLayout: 'default#image',
		    iconImageHref: '../modern-living/img/iconmap.png',
		    iconImageSize: [42, 55],
		    iconImageOffset: [-19, -44] // Тип метки
		});
		
		myMap.geoObjects.add(myPlacemark); // Добавление метки
		//myPlacemark.balloon.open(); // Открытие подсказки метки
		
	};
	
    ymaps.ready(init); 


//AIzaSyBIGltrhAz5JWZYlhFMcd7HhA2y-iXSQ7g


// Ya-key
//f6921e25-5bc0-4c80-a190-0b6bd7fa1fc9

