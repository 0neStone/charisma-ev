
// Function for creating cookies
// cname = Name of cookie; cvalue = Value to be stored; exdays = Number of days until the cookie expires
function setCookie(cname , cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  console.log("Cookie set!")
}

// Get value from cookie
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//Check if the cookie is set
function checkCookie() {
  var visit=getCookie("visit");
  if (visit != "") {
    console.log("No popup needed :D");
  } else {
     if (visit = "visited") {
       openPopup();
       console.log("Attempted Pop-Up");
     }
  }
}

function resetVisit() {
    document.cookie = 'visit =; Max-Age=-99999999;';
    console.log('Reset visit');
}
