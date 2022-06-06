var speciesArray = ["Pike","Salmon","Salmon","Trout"];
var lengths =      [40, 71, 76, 22];
var weights = [4.925, 3.675, 5.400, 1.510];

function addFish() {

  var species = document.getElementById("txtSpecies").value;    
  var length = Number( document.getElementById("txtLength").value ); 
  var weight = Number( document.getElementById("txtWeight").value ); 


  if(!isNaN(length) && !isNaN(weight)) {
  
    speciesArray.push(species);
    lengths.push(length);
    weights.push(weight);

  
    document.getElementById("txtSpecies").value = "";    
    document.getElementById("txtLength").value = ""; 
    document.getElementById("txtWeight").value = ""; 
  } else {
    document.getElementById("pOutput1").innerHTML =
                            "Error: Enter numbers to length and weight!";
  }
}

function listAllCatch() {
  var outputText = "";


  for(var i=0; i < speciesArray.length; i++) {
    outputText = outputText + speciesArray[i] + ": " +lengths[i]
                  +"cm, "+ weights[i] + "kg.<br />";
  }

  document.getElementById("pOutput2").innerHTML = outputText;
}

function showAverageWeight() {
  var outputText;


  if( speciesArray.length > 0 ) {
    var sumOfWeights = 0;

    for(var i=0; i < speciesArray.length; i++) {
      sumOfWeights = sumOfWeights + weights[i];
    }

    var avg = sumOfWeights / speciesArray.length;
    outputText = "Average: " +avg +"kg.";
  } else {
    outputText = "Error: No fish at all. Cannot calculate average.";
  }

  document.getElementById("pOutput3").innerHTML = outputText;
}

function findFish() {

  var speciesSearched = document.getElementById("txtSpeciesSearched").value;    
  var found = false;
  var outputText = "";
  
  for(var i=0; i < speciesArray.length; i++) {
    if(speciesSearched===speciesArray[i]){
      found = true;
      outputText = outputText + speciesArray[i] + ": " +lengths[i]
                    +"cm, "+ weights[i] + "kg.<br />";
    } 
  }

  if(found === false) {
    outputText = speciesSearched + " not found!";
  }


  document.getElementById("pOutput4").innerHTML = outputText;
}

function maxWeightFreshmanWay() {
  var outputText = "";

  if(speciesArray.length > 0) {
    var maxWeight = -2;
    var maxSpecies = "N/A";

    for(var i=0; i < speciesArray.length; i++) {
      if( maxWeight < weights[i]  ) {
        maxWeight = weights[i];
        maxSpecies = speciesArray[i];
      }
    }

    outputText = "Max: " +maxWeight + " (" +maxSpecies +")";
  } else {
    outputText = "Error: No fish, no maximum.";
  }


  document.getElementById("pOutput5").innerHTML = outputText;
}

function maxWeightUsingIndex() {
  var outputText = "";

  if(speciesArray.length > 0) {
    var maxIndex = 0;

    for(var i=0; i < speciesArray.length; i++) {
      if( weights[maxIndex] < weights[i]  ) {
        maxIndex = i; 
      }
    }

    var kilograms = weights[maxIndex];
    var species = speciesArray[maxIndex];

  
    outputText = "Max: " + kilograms + "kg (" +species +")"
        + " which in lbs is " + convertKgToLbs(kilograms);
  } else {
    outputText = "Error: No fish, no maximum.";
  }


  document.getElementById("pOutput5").innerHTML = outputText;
}

function convertKgToLbs(kilograms) {
  var lbs = kilograms / 0.454;
  return lbs;

function fishSpeciesReport() {
  var speciesSearched = document.getElementById("txtSpeciesSearched").value;    
  var found = false;
  var count = 0;
  var outputText = "";

  for(var i=0; i < speciesArray.length; i++) {
    if(speciesSearched===speciesArray[i]){
      found = true;
      count++;
      outputText = outputText + speciesArray[i] + ": " +lengths[i]
                    +"cm, "+ weights[i] + "kg.<br />";
    } 
  }

  if(found === false) {
    outputText = outputText + speciesSearched + " not found!";
  } else {
    outputText = outputText + count + " " +speciesSearched +"(s)";
  }

  document.getElementById("txtSpeciesSearched").value = "";
  document.getElementById("pOutput5").innerHTML = outputText;
}
}
