//Programmer: Travis Ralph
//Team Member: Julian Granger
//Bolt ID:183F
//Date: 4.16.2024
//Program: Hello World - Sandbox
//Program url: https://edu.sphero.com/program/16700418/edit

/*
async function startProgram() {
	await speak("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(100);
	await delay (2);
	setSpeed(0);
}
*/

async function startProgram() {

	setMainLed({ r: 0, g: 0, b: 255 });

	await speak("Hello guys", true);

	await delay(1);

	for (var sq1 = 0; sq1 < 4; sq1++) {

		setMainLed(getRandomColor());

		await Sound.EightBit.Drop.play(true);

		await roll((getHeading() + 90), 70, 1);

		await delay(0.02);

	}

}