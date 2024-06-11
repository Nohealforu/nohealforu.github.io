getTagValue = function(inputString, startingTag, endingTag = null)
{
  if endingTag = startingTag.replace('<', '</');
  return (inputString.substring(str.indexOf(startingTag) + 1, str.lastIndexOf(endingTag)));
}

convertXML = function()
{
	let musicXMLInput = document.getElementById('musicXMLInput').value;
  let outputLines = [];
  let tempNotes = [];
  let tempo = 100;
  let divisions = 100;
  let beatsConversion = 1.0;
  inputLines = musicXMLInput.split('\n');
  for (let i = 0; i < inputLines.length; i++)
  {
  	let inputLine = inputLines[i];
    if(inputLine.includes('<divisions>'))
    {
      divisions = parseFloat(getTagValue(inputLine, '<divisions>'));
      beatsConversion = 60000.0 / tempo / divisions;
    }
    else if(inputLine.includes('<sound tempo="'))
    {
      tempo = parseFloat(getTagValue(inputLine, '<sound tempo="', '"/>"'));
      beatsConversion = 60000.0 / tempo / divisions;
    }
  }
  document.getElementById("DECToneOutput").value = '';
};
