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



		// Programmer:  Julian Granger - Blue LED Checkpoint Commit - Date: 5/2/24
			await roll((getHeading() + 0), 80, 1.85);
			setMainLed({ r: 0, g: 0, b: 255 });


			// Programmer: Travis Ralph - Sound One Checkpoint Commit - Date: 5/3/24
			await roll((getHeading() + 90), 80, 1.2);
			await Sound.EightBit.Drop.play(true);


			// Programmer:  - Red LED Checkpoint Commit - Date:



			// Programmer:  - Sound Two Checkpoint Commit - Date:



			// Programmer:  - Green LED Checkpoint Commit - Date:



			// Programmer:  - Purple LED and Sound Three  Checkpoint Commit - Date:



			// Programmer:  - Finish Text and Audio Commit - Date:




	}