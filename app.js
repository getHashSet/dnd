console.log("Starting to Load Data.");

$( document ).ready(function() {
// ONLY PUT CODE HERE! OTHERWISE IT COULD GO OFF BEFORE THE PAGE IS DONE LOADING.
// START //
// ///// //

const focusHereOnStart = $(".dynamic_form .topsecretpassword");
focusHereOnStart.focus();

const allTheWeapons = $(".weapons")[0];

const allTheOtherWeapons = $(".weapons")[1];

for(i = 0; i < allTheWeapons.length; i++){
    console.log(allTheWeapons[i].innerText);
};

for(i = 0; i < allTheOtherWeapons.length; i++){
    console.log(allTheOtherWeapons[i].innerText);
}

console.log(allTheWeapons);

// Get the user input
// when button is pressed
// display user input to console

const randomStatValue = () => {
 // create a random number between 5 and 18;
    return Math.floor(Math.random() * 14) + 5;
};

const randomHPValue = () => {
    let charclass = ($(".player_class").val().toLowerCase());
    let charlevel = ($(".player_level")).val();
    if (charclass == "cleric") {
        return charlevel * (Math.floor(Math.random() * 9) + 1);
    }
    else if (charclass == "fighter") {
        return charlevel * (Math.floor(Math.random() * 11) + 1);
    }
}

$(".submit_button").click(function(){
    // now get the value
    let characterName = $(".dynamic_form .player_name").val();
    let characterRace = $(".dynamic_form .player_race").val();
    let characterClass = $(".dynamic_form .player_class").val();
    let characterLevel = $(".dynamic_form .player_level").val();

    let characterStr = randomStatValue();
    let characterDex = randomStatValue();
    let characterCha = randomStatValue();
    let characterWis = randomStatValue();
    let characterCon = randomStatValue();
    let characterInt = randomStatValue();

    // now display that value
    console.log(`Character Name: ${characterName}`);
    console.log(`Character Class: ${characterClass}`);
    console.log(`Character Race: ${characterRace}`);
    console.log(`Character Level: ${characterLevel}`);
    console.log(`Character Str: ${characterStr}`);
    console.log(`Character Dex: ${characterDex}`);
    console.log(`Character Con: ${characterCon}`);
    console.log(`Character Int: ${characterInt}`);
    console.log(`Character Wis: ${characterWis}`);
    console.log(`Character Cha: ${characterCha}`);
});

// NO CODE PAST THIS LINE
});


console.log ("Still Loading...");