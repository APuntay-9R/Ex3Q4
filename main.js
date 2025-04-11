	function magnitude(){
		var magnitudeInput = document.getElementById('magnitude').value;

			if (magnitudeInput >= 8) {
				window.alert('Catastrophic');
			}

			else if (magnitudeInput >= 7 && magnitudeInput <=7.9){
				window.alert('Major Damage');
			}

			else if (magnitudeInput >= 6.1 && magnitudeInput <=6.9){
				window.alert('Likely Damaged');
			}

			else if (magnitudeInput >= 5.5 && magnitudeInput <=6.0){
				window.alert('Slightly Damaged');
			}

			else if (magnitudeInput >= 2.5 && magnitudeInput <=5.4){
				window.alert('Rarely Damaged');
			}

			else (magnitudeInput <2.5) {
				window.alert('Not Always Felt');
			}
	}

/*
	Richter Scale
	>8 	Catastrophic
	7-7.9 Major Damage
	6.1-6.9 Likely Damaged
	5.5-6.0 Slightly Damaged
	2.5-5.4 Rarely Damaged
	<2.5 Not Always Felt

	*/