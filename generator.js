function genName(){
  var name = "";                                                //make a new word
  var l = parseInt(document.getElementById("length").value);    //set the length of the word

  //list of possible characters to use
  var consonants = "bcdfghjklmnpqrstvwxyz";
  var vowels = "aeiou";
  var combosCon = ["th", "rg", "ch", "sh", "ck", "st", "ss", "rt", "pr", "br", "pl", "wh", "rl", "sc", "ct", "nd", "ng"];  
  var combosVow  = ["ai", "ie", "ae", "oa", "oo", "ee", "ue"]
  
  //start with vowel or not
  var start = Math.floor(Math.random() * 6);                            //randomizer to start with a vowel
  var vowelNext = start == 5 ? true : false;                            //1 is true, 0 is false
  
  //create the random word
  while(name.length < l){
    if(!vowelNext){
      //random for combo or consonant
      var dice = Math.floor(Math.random() * 6)                          //roll a virtual dice for randomization
      if((dice % 3 == 0) && !(name.length + 2 > l)){                    //if the dice rolls a 3 or 6 and the combo will not go over the length amount
        var indexRand = Math.floor(Math.random() * combosCon.length);                  //find random combo  
        name += combosCon[indexRand];                                                  //add the combo to the word
      }else
        name += consonants.charAt(Math.floor(Math.random() * consonants.length));   //add single consonant
    }else{
      var dice = Math.floor(Math.random() * 6)                          //roll a virtual dice for randomization
      if((dice == 4) && !(name.length + 2 > l)){                    //if the dice rolls a 3 or 6 and the combo will not go over the length amount
        var indexRand = Math.floor(Math.random() * combosVow.length);                  //find random combo  
        name += combosVow[indexRand];                                                  //add the combo to the word
      }else
        name += vowels.charAt(Math.floor(Math.random() * vowels.length));             //add a vowel
    }
    vowelNext = !vowelNext;                                             //make the next letter a vowel for cleanliness
  }
  
  //RANDOM COLOR!!!!!!! (for lulz)
  var rainbow = "012456789abcdef";                //hex code list
  var color = "#";
  while(color.length < 7){
    var palette = Math.floor(Math.random() * 16)
    color += rainbow.charAt(palette);
  }
  
  //finally output result
  document.getElementById("output").style.color = color;
  document.getElementById("output").innerHTML = name;                 //set the outside text to the new name
}