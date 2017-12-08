/**
 * 
 */

launchBot();

function launchBot() {
	var negation = Array('pas', 'ne');
	var good = Array('bien', 'ok', 'oui', 'si', 'va', 'carrément');
	var bad = Array('mal', 'non', 'peu');

	/*
	 * var sommeil = new Map(['sommeil', false], ['somnolence', false],
	 * ['fatigue', false] , ['fatiguer', false], ['fatigué', false], ['dormi',
	 * true]);
	 */
	/*
	 * var alcool = new Map(['alcool', false], ['bu', false], ['boire', false],
	 * ['bourré', false]);
	 */

	var sommeil = new Map();
	sommeil.set('sommeil', false);
	sommeil.set('somnolence', false);
	sommeil.set('fatigue', false);
	sommeil.set('fatiguer', false);
	sommeil.set('fatigué', false);
	sommeil.set('dormi', true);
	sommeil.set('dormis', true);

	var alcool = new Map();
	alcool.set('alcool', false);
	alcool.set('verre', false);
	alcool.set('verres', false);
	alcool.set('bu', false);
	alcool.set('boire', false);
	alcool.set('bourré', false);

	var answer = prompt("Bonjour, comment allez vous ?");

	var humor = getHumor(answer);

	var positif = humor[0];
	var negatif = humor[1];

	console.log("postiv = " + positif);
	console.log("negatif = " + negatif);

	if (positif) {
		posAnswer()
	} else if (negatif) {
		negAnswer();
	} else {
		answer = prompt("Vous pensez-vous apte à conduire ?");
		if (negatif) {
			negAnswer()
		} else {
			posAnswer();
		}
	}
}

function posAnswer() {
	answer = prompt("Super ! Est-ce que vous manquez de sommeil ?");
	if (getHumor(answer)[0]) {
		alert("Il faut faire très attention ! On ne s'en rend pas forcément compte mais ça peut s'avérer mortel !")
	} else {
		answer = prompt("Et vous êtes sobre ? ( ͡° ͜ʖ ͡°)");
		if (getHumor(answer)[1] || getState(answer)[2]) {
			// answer = prompt("Il ne faut pas abuser sur l'alcool ? Combien de
			// verres ?");
			dangerAlcool();
		} else {
			alert("Bonne route alors !")
		}
	}
}

function negAnswer() {
	answer = prompt("Quelle problème avez-vous ?");
	state = getState(answer);
	// Sommeil
	if (state[0]) {
		alert("Il faut faire très attention ! On ne s'en rend pas forcément compte mais ça peut s'avérer mortel !")
		// Alcool
	} else if (state[1]) {
		dangerAlcool();
	} else if (state[2]) {
		alert("Bonne nouvelle ! Bonne route alors !");
	} else {
		alert("Je n'ai pas compris ce que vous avez, mais dans le doute abstenez vous !")
	}
}

function dangerAlcool() {
	answer = prompt("Ah ! C'est problèmatique, combien de verres avez-vous bu ?");
	var n = getInt(answer);

	if (isNaN(n)) {
		alert("Je n'ai pas compris, mais dans le doute mieux vaut s'abstenir ! Essayer de dormir sur place ou d'attendre un peu.")
	} else {
		if (n > 2) {
			alert("Il faudrait que vous attendiez un certain temps avant de prendre le volant ! Cela pourrait être dangereux.");
		} else {
			alert("Excellent ! Bonne route !");
		}
	}
}

function getInt(sentence) {

	var som = false;
	var alc = false;
	var negate = false;

	var number = parseInt("");
	sentence.split(' ').forEach(function(word) {
		console.log(word);
		if (!isNaN(parseInt(word))) {
			number = parseInt(word);
		}

	});

	return [ number ]
}

function getState(sentence) {

	var som = false;
	var alc = false;
	var negate = false;
	var ok = false;

	sentence.split(' ').forEach(function(word) {
		console.log(word);
		if (negation.indexOf(word) != -1) {
			negate = true;
		}

		// Sommeil
		var tmp = sommeil.get(word);
		if (tmp != undefined) {
			som = !tmp;
			if (tmp && !negate) {
				ok = true;
			}
			if (negate) {
				if (!tmp) {
					ok = true;
				}
				som = !som;
			}
		}

		// Alcool
		var tmp = alcool.get(word);
		if (tmp != undefined) {
			alc = !tmp;
			if (tmp && !negate) {
				ok = true;
			}
			if (negate) {
				if (!tmp) {
					ok = true;
				}
				alc = !alc;
			}
		}

		/*
		 * if (som && negate) { som = false; } else if (alc && negate) { alc =
		 * false; }
		 */

		/*
		 * console.log("postiv = "+positif); console.log("negatif = "+negatif);
		 * console.log("negate = "+negate);
		 */
	});

	return [ som, alc, ok ]
}

function getHumor(sentence) {

	var positif = false;
	var negatif = false;
	var negate = false;

	var BreakException = {};

	sentence.split(' ').forEach(function(word) {
		console.log(word);
		if (negation.indexOf(word) != -1) {
			negate = true;
		}
		// Positif
		if (good.indexOf(word) != -1) {
			positif = true;
		}

		// Négatif
		if (bad.indexOf(word) != -1) {
			negatif = true;
		}

		if (positif && negate) {
			positif = false;
			negatif = true;
		} else if (negatif && negate) {
			negatif = false;
			positif = true;
		}

		console.log("postiv = " + positif);
		console.log("negatif = " + negatif);
		console.log("negate = " + negate);

	});

	if (!positif && !negatif && negate) {
		negatif = true;
	}

	return [ positif, negatif ];
}