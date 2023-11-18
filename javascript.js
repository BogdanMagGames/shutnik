const jokes = [
    "Cum se numește o maimuță care scrie poezii? Simian Shakespear.",
	"De ce nu se ceartă niciodată două ouă? Pentru că întotdeauna își rezolvă problemele înainte să se spargă.",
	"Cum se numește ursul care cântă la chitară? Un muzicarpat.",
	"De ce a mers oul la școală? Ca să devină omeletă cu șanse de angajare.",
	"De ce a fost cartea de istorie tristă? Pentru că întotdeauna aveau finalul în trecut.",
	"Cum se numește un pinguin în devenire? Un ping.",
	"Care este animalul cel mai bun la matematică? Jirafaritmetică.",
	"De ce nu pot dinozaurii să folosească calculatoarele? Pentru că au murit înainte să fie inventate.",
	"Cum se numește un pește inteligent? Un știuc.",
	"Care este animalul preferat al programatorilor? Python.",
	"De ce nu pot oglinzile să mintă niciodată? Pentru că ele întotdeauna reflectă adevărul."
];

document.getElementById('startButton').addEventListener('click', generateJoke);

function generateJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const jokeDisplay = document.getElementById('jokeDisplay');
    jokeDisplay.textContent = jokes[randomIndex];
}