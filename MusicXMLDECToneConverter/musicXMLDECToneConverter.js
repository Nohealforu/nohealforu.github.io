getTagValue = function(inputString, startingTag, endingTag = null)
{
	endingTag = endingTag || startingTag.replace('<', '</');
	return (inputString.substring(inputString.indexOf(startingTag) + startingTag.length, inputString.lastIndexOf(endingTag)));
}

const frequencyTable = [0,
						16, 17, 18, 19, 21, 22, 23, 24, 26, 27, 29, 31,
						33, 35, 37, 39, 41, 44, 46, 49, 52, 55, 58, 62,
						65, 69, 73, 78, 82, 87, 92, 98, 104, 110, 117, 123,
						131, 139, 147, 156, 175, 185, 196, 208, 220, 233, 247,
						262, 277, 295, 311, 330, 349, 370, 392, 415, 440, 466, 494,
						523, 554, 587, 622, 659, 698, 740, 784, 831, 880, 932, 988,
						1046, 1109, 1175, 1245, 1319, 1397, 1480, 1568, 1661, 1760, 1865, 1976,
						2093, 2217, 2349, 2489, 2637, 2794, 2960, 3136, 3322, 3520, 3729, 3951,
						4186, 4435, 4699, 4978, 5274, 5588, 5920, 6272, 6645, 7040, 7459, 7902];

const noteTable = {'00': 0
,'C0': 1,'C1': 13,'C2': 25,'C3': 37,'C4': 49,'C5': 61,'C6': 73,'C7': 85,'C8': 97
,'D0': 3,'D1': 15,'D2': 27,'D3': 39,'D4': 21,'D5': 63,'D6': 75,'D7': 87,'D8': 99
,'E0': 5,'E1': 17,'E2': 29,'E3': 41,'E4': 53,'E5': 65,'E6': 77,'E7': 89,'E8': 101
,'F0': 6,'F1': 18,'F2': 30,'F3': 42,'F4': 54,'F5': 66,'F6': 78,'F7': 90,'F8': 102
,'G0': 8,'G1': 20,'G2': 32,'G3': 44,'G4': 56,'G5': 68,'G6': 80,'G7': 92,'G8': 104
,'A0': 10,'A1': 22,'A2': 34,'A3': 46,'A4': 58,'A5': 70,'A6': 82,'A7': 94,'A8': 106
,'B0': 12,'B1': 24,'B2': 36,'B3': 48,'B4': 60,'B5': 72,'B6': 84,'B7': 96,'B8': 108};

createNote = function(currentStep, currentAlter, currentOctave, currentDuration, beatsConversion)
{
	if(currentAlter == null) currentAlter = 0;
	let noteIndex = noteTable[currentStep + currentOctave];
	noteIndex += currentAlter;
	if (noteIndex < 0)
		noteIndex = 0;
	else if(noteIndex > frequencyTable.length - 1)
		noteIndex = frequencyTable.length - 1;
	return ':t<' + frequencyTable[noteIndex] + ',' + Math.round(currentDuration * beatsConversion) + '>';
}

convertXML = function()
{
	let musicXMLInput = document.getElementById('musicXMLInput').value;
	let outputLines = [];
	let tempNotes = [];
	let currentStep = 0, currentAlter = 0, currentOctave = 0, currentDuration;
	let tempo = 100;
	let divisions = 100;
	let beatsConversion = 1.0;
	let stopReadingNotes = false;
	inputLines = musicXMLInput.split('\n');
	for (let i = 0; i < inputLines.length; i++)
	{
		let inputLine = inputLines[i];
		if(inputLine.includes('</measure>')) 
		{
			stopReadingNotes = false;
			outputLines.push('[' + tempNotes.join('') + ']');
			tempNotes = [];
		}
		if(stopReadingNotes)
		{
			
		}
		else if(inputLine.includes('<divisions>'))
		{
		  	divisions = parseFloat(getTagValue(inputLine, '<divisions>'));
		  	beatsConversion = 60000.0 / tempo / divisions;
		}
		else if(inputLine.includes('<sound tempo="'))
		{
			tempo = parseFloat(getTagValue(inputLine, '<sound tempo="', '"/>'));
			beatsConversion = 60000.0 / tempo / divisions;
		}
		else if(inputLine.includes('<step>'))
		  	currentStep = getTagValue(inputLine, '<step>');
		else if(inputLine.includes('<alter>'))
		  	currentAlter = parseInt(getTagValue(inputLine, '<alter>'));
		else if(inputLine.includes('<octave>'))
		  	currentOctave = getTagValue(inputLine, '<octave>');
		else if(inputLine.includes('<duration>'))
		  	currentDuration = parseFloat(getTagValue(inputLine, '<duration>'));
		else if(inputLine.includes('<rest/>'))
		{
			currentStep = '0';
			currentAlter = 0;
			currentOctave = '0';
		}
		else if(inputLine.includes('</note>'))
		{
			tempNotes.push(createNote(currentStep, currentAlter, currentOctave, currentDuration, beatsConversion));
			currentStep = '0';
			currentAlter = 0;
			currentOctave = '0';
		}
		else if(inputLine.includes('<backup>'))
		{
			stopReadingNotes = true;
		}
	}
document.getElementById("DECToneOutput").value = outputLines.join('\n');
};
