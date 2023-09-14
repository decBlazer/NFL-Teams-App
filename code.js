// The code.org dataset "NFL Teams" is used as the primary source of information for all numbers and logos
// All images besides the Washington Commanders image are sourced from the Code.org "NFL Teams" dataset
// The Washington Commanders image was updated from - https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Washington_Commanders_logo.svg/1024px-Washington_Commanders_logo.svg.png
var teamList = getColumn("NFL Teams", "Team");
var conferenceList = getColumn("NFL Teams", "Conference");
var divisionList = getColumn("NFL Teams", "Division");
var capacityList = getColumn("NFL Teams", "Capacity");
var imageList = getColumn("NFL Teams", "Image");
var stadiumList = getColumn("NFL Teams", "Stadium");
var cityList = getColumn("NFL Teams", "City");
var coachList = getColumn("NFL Teams", "Head coach");
function choose(team) {
  for (var i = 0; i < teamList.length; i++) {
    if (teamList[i] == team) {
      return(imageList[i]);
    }
  }
  return "Not Found";
}

onEvent("nflTeamsDropdown", "input", function( ) {
  var currentTeam = getText("nflTeamsDropdown");
  setProperty("teamImage", "image", choose(currentTeam));
});

function choose1(stadium){
  for (var i = 0; i < stadiumList.length; i++) {
    if (teamList[i] == stadium) {
      return(stadiumList[i]);
    }
  }
  return "Not Found";
}

onEvent("nflTeamsDropdown", "input", function( ) {
  var currentStadium = getText("nflTeamsDropdown");
  setProperty("stadiumTextArea", "text", choose1(currentStadium));
});

function choose2(city){
  for (var i = 0; i < cityList.length; i++) {
    if (teamList[i] == city) {
      return(cityList[i]);
    }
  }
  return "Not Found";
}

onEvent("nflTeamsDropdown", "input", function( ) {
  var currentCity = getText("nflTeamsDropdown");
  setProperty("cityTextArea", "text", choose2(currentCity));
});

function choose3(capacity){
  for (var i = 0; i < capacityList.length; i++) {
    if (teamList[i] == capacity) {
      return(capacityList[i]);
    }
  }
  return "Not Found";
}

onEvent("nflTeamsDropdown", "input", function( ) {
  var currentCapacity = getText("nflTeamsDropdown");
  setProperty("capacityTextArea", "text", choose3(currentCapacity));
});

function choose4(coach){
  for (var i = 0; i < coachList.length; i++) {
    if (teamList[i] == coach) {
      return(coachList[i]);
    }
  }
  return "Not Found";
}

onEvent("nflTeamsDropdown", "input", function( ) {
  var currentCoach = getText("nflTeamsDropdown");
  setProperty("coachTextArea", "text", choose4(currentCoach));
});

function choose5(conference){
  for (var i = 0; i < conferenceList.length; i++) {
    if (teamList[i] == conference) {
      return(conferenceList[i]);
    }
  }
  return "Not Found";
}

onEvent("nflTeamsDropdown", "input", function( ) {
  var currentConference = getText("nflTeamsDropdown");
  setProperty("conferenceTextArea", "text", choose5(currentConference));
});

function choose6(division){
  for (var i = 0; i < divisionList.length; i++) {
    if (teamList[i] == division) {
      return(divisionList[i]);
    }
  }
  return "Not Found";
}

onEvent("nflTeamsDropdown", "input", function( ) {
  var currentDivision = getText("nflTeamsDropdown");
  setProperty("divisionTextArea", "text", choose6(currentDivision));
});
onEvent("nflTeamsDropdown", "input", function( ) {
  var teams = getText("nflTeamsDropdown");
  if (teams == "Oakland Raiders") {
    setScreen("notFoundScreen");
    setProperty("teamImage", "image", "icon://fa-long-arrow-down");
    
  }
});

onEvent("backButton", "click", function( ) {
  setScreen("dropdownScreen");
});