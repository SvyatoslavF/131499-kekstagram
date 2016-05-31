var getMessage = function(a, b){
	if(tipeof(a)=="boolean"){
		if(a==true){
			textMessage = "Переданное GIF-изображение анимировано и содержит [b] кадров";
		}
		else if(a==false){
			textMessage = "Переданное GIF-изображение не анимировано";
		}
	}

	else if(tipeof(a)=="number"){
		textMessage = "Переданное SVG-изображение содержит [a] объектов и [b * 4] атрибутов";
	}

	else if((tipeof(a)=="object")&&(tipeof(b)=="object")){
		var square = 0;
		for(var i=0; (i<= a.length) || (i<= b.length); i++){
			square = square + a[i]*b[i];
		}
		textMessage = "Общая площадь артефактов сжатия: [square] пикселей";
	}

	else if(tipeof(a)=="object"){
		var sum = 0;
		for (var i=0; i<= a.length; i++){
			sum = sum + a[i];
		}
		textMessage = "Количество красных точек во всех строчках изображения: [sum]";
	}
}

getMessage(2, 4);