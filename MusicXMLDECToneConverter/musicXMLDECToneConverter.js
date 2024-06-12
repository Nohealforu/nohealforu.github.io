getTagValue = function(inputString, startingTag, endingTag = null)
{
  endingTag = endingTag || startingTag.replace('<', '</');
  return (inputString.substring(inputString.indexOf(startingTag) + startingTag.length, inputString.lastIndexOf(endingTag)));
}

const frequencyTable = {'000': 0
,'C00': 16,'C10': 33,'C20': 65,'C30': 131,'C40': 262,'C50': 523,'C60': 1046,'C70': 2093,'C80': 4186
,'C0+1': 17,'C1+1': 35,'C2+1': 69,'C3+1': 139,'C4+1': 277,'C5+1': 554,'C6+1': 1109,'C7+1': 2217,'C8+1': 4435
,'D00': 18,'D10': 37,'D20': 73,'D30': 147,'D40': 295,'D50': 587,'D60': 1175,'D70': 2349,'D80': 4699
,'D0+1': 19,'D1+1': 39,'D2+1': 78,'D3+1': 156,'D4+1': 311,'D5+1': 622,'D6+1': 1245,'D7+1': 2489,'D8+1': 4978
,'E00': 21,'E10': 41,'E20': 82,'E30': 165,'E40': 330,'E50': 659,'E60': 1319,'E70': 2637,'E80': 5274
,'F00': 22,'F10': 44,'F20': 87,'F30': 175,'F40': 349,'F50': 698,'F60': 1397,'F70': 2794,'F80': 5588
,'F0+1': 23,'F1+1': 46,'F2+1': 92,'F3+1': 185,'F4+1': 370,'F5+1': 740,'F6+1': 1480,'F7+1': 2960,'F8+1': 5920
,'G00': 24,'G10': 49,'G20': 98,'G30': 196,'G40': 392,'G50': 784,'G60': 1568,'G70': 3136,'G80': 6272
,'G0+1': 26,'G1+1': 521,'G2+1': 104,'G3+1': 208,'G4+1': 415,'G5+1': 831,'G6+1': 1661,'G7+1': 3322,'G8+1': 6645
,'A00': 27,'A10': 55,'A20': 110,'A30': 220,'A40': 440,'A50': 880,'A60': 1760,'A70': 3520,'A80': 7040
,'A0+1': 29,'A1+1': 58,'A2+1': 117,'A3+1': 233,'A4+1': 466,'A5+1': 932,'A6+1': 1865,'A7+1': 3729,'A8+1': 7459
,'B00': 31,'B10': 62,'B20': 123,'B30': 247,'B40': 494,'B50': 988,'B60': 1976,'B70': 3951,'B80': 7902};

createNote = function(currentStep, currentAlter, currentOctave, currentDuration, beatsConversion)
{
	return ':t<' + frequencyTable[currentStep + currentOctave + currentAlter] + ',' + Math.round(currentDuration * beatsConversion) + '>';
}

convertXML = function()
{
  let musicXMLInput = document.getElementById('musicXMLInput').value;
  let outputLines = [];
  let tempNotes = [];
	let currentStep, currentAlter, currentOctave, currentDuration;
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
      tempo = parseFloat(getTagValue(inputLine, '<sound tempo="', '"/>"'));
      beatsConversion = 60000.0 / tempo / divisions;
		}
	  else if inputLine.includes('<per-minute>'))
    {
      tempo = parseFloat(getTagValue(inputLine, '<per-minute>'));
      beatsConversion = 60000.0 / tempo / divisions;
    }
    else if(inputLine.includes('<step>'))
      currentStep = getTagValue(inputLine, '<step>');
    else if(inputLine.includes('<alter>'))
      currentAlter = getTagValue(inputLine, '<alter>');
    else if(inputLine.includes('<octave>'))
      currentOctave = getTagValue(inputLine, '<octave>');
    else if(inputLine.includes('<duration>'))
      currentDuration = parseFloat(getTagValue(inputLine, '<duration>'));
		else if(inputLine.includes('<rest/>'))
		{
			currentStep = '0';
			currentAlter = '0';
			currentOctave = '0';
		}
		else if(inputLine.includes('</note>'))
		{
			tempNotes.push(createNote(currentStep, currentAlter, currentOctave, currentDuration, beatsConversion));
			currentStep = '0';
			currentAlter = '0';
			currentOctave = '0';
		}
		else if(inputLine.includes('<backup>'))
		{
			stopReadingNotes = true;
		}
	}
  document.getElementById("DECToneOutput").value = outputLines.join('\n');
};
