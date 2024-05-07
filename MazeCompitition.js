//Programmer: Travis Ralph
//Team Member: Julian Granger
//Bolt ID:183F
//Date: 4.30.2024
//Program: Maze Competition
//Program url: 


		// Programmer: Travis Ralph - Start Text and Audio Checkpoint Commit - Date: 5/1/24
		async function startProgram() {
			await speak('Start', true);
			await scrollMatrixText("start", { r: 90, g: 200, b: 0 }, 30, true);



		// Programmer: Julian Granger - Blue LED Checkpoint Commit - Date: 5/2/24
			await roll((getHeading() + 0), 80, 1.9);
			setMainLed({ r: 0, g: 0, b: 255 });
			await delay(1);

			// Programmer: Travis Ralph - Sound One Checkpoint Commit - Date: 5/3/24
			await roll((getHeading() + 90), 80, 1.3);
			await Sound.EightBit.Drop.play(true);
			await delay(1);

			// Programmer: Julian Granger - Red LED Checkpoint Commit - Date: 5/6/24
			await roll((getHeading() + 90), 70, 0.9);
			await delay(1);
			await roll((getHeading() + 40), 70, 1);
			await delay(1);
			await roll((getHeading() - 100), 80, 0.65);
			await delay(1);
			setMainLed({ r: 255, g: 0, b: 0 });
			await delay(1)

			// Programmer: Travis Ralph - Sound Two Checkpoint Commit - Date: 5/7/24
			await roll((getHeading() - 80), 70, 1);
			await delay(1);
			await roll((getHeading() + 90), 70, .55);
			await Sound.EightBit.Chomp.play(true);
			await delay(1) 



			// Programmer:  - Green LED Checkpoint Commit - Date:



			// Programmer:  - Purple LED and Sound Three  Checkpoint Commit - Date:



			// Programmer:  - Finish Text and Audio Commit - Date:




	}