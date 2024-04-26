//Programmer: Travis Ralph
//Team Member: Julian Granger
//Bolt ID:183F
//Date: 4.24.2024
//Program: Obstical Course
//Program url: https://edu.sphero.com/program/16700418/edit


async function startProgram() {
	// Julian Granger - Pc 21 Checkpoint One
	await roll(0, 80, 1.5,);
	await delay(1)
	await roll((getHeading() + 90), 50, 1.5);
	await delay(1)
	await roll((getHeading() + 90), 50, 1);
	await delay(1)
