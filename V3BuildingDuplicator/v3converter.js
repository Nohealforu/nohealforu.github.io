var buildingList = [];
var buildingDataLines = [];
var buildingSelection = '';

getBuildingList = function()
{
	let buildingData = document.getElementById('stateBuildingInput').value;
  buildingDataLines = buildingData.split('\n');
  let insideBuildingTag = false;
  for (let i = 0; i < buildingDataLines.length; i++)
  {
  	let buildingDataLine = buildingDataLines[i];
    if(buildingDataLine.includes('create_building={'))
    {
    	insideBuildingTag = true;
    }
    else if(insideBuildingTag)
    {
    	if(buildingDataLine.includes('}'))
      	insideBuildingTag = false;
      else
      {
        let buildingNameIndex = buildingDataLine.indexOf('building=');
        if(buildingNameIndex > 0)
        {
          let offset = buildingNameIndex + 9 + 1;
          let buildingName = buildingDataLine.substring(offset, buildingDataLine.indexOf('"', offset));
          buildingList.push(buildingName);
        }
      }
    }
  }
  buildingList = Array.from(new Set(buildingList));
  var buildingOptions = "";
  for (let buildingId in buildingList) {
    buildingOptions += "<option>" + buildingList[buildingId] + "</option>";
  }
  document.getElementById("buildingSelect").innerHTML = buildingOptions;
};

changeBuildingSelection = function(element)
{
	buildingSelection = element.value;
};

doubleBuilding = function()
{
  let insideBuildingTag = false;
  let buildingMatch = false;
  let levelLine = 0;
  let levelOffset = 0;
  for (let i = 0; i < buildingDataLines.length; i++)
  {
  	let buildingDataLine = buildingDataLines[i];
    if(buildingDataLine.includes('create_building={'))
    {
    	insideBuildingTag = true;
      levelLine = 0;
      levelOffset = 0;
      buildingMatch = false;
    }
    else if(insideBuildingTag)
    {
    	if(buildingDataLine.includes('}'))
      {
      	if(buildingMatch == true && levelLine > 0)
        {
        	let buildingDataLevelLine = buildingDataLines[levelLine];
          let levelValue = buildingDataLevelLine.slice(levelOffset);
          buildingDataLevelLine = buildingDataLevelLine.replace(levelValue, Math.floor(levelValue * 2));
          buildingDataLines[levelLine] = buildingDataLevelLine;
        }
      	insideBuildingTag = false;
      }
      else if(buildingDataLine.includes('building="' + buildingSelection + '"'))
      {
      	buildingMatch = true;
      }
      else if(buildingDataLine.includes('level='))
      {
      	levelOffset = buildingDataLine.indexOf('level=') + 6;
        levelLine = i;
      }
    }
  }
  document.getElementById("stateBuildingOutput").innerHTML = buildingDataLines.join('\n');
};
