// Just check to see that we found the div element we are looking for
myDiv = document.getElementById("myDiv");


// Click event to attach to button
function myClick () {

  // Quick check to verify that the function executes.
  // Get the values that were input into the two text boxes.
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var radio = document.getElementById('radio').checked;
  var checkbox = document.getElementById('checkbox').checked;

  session = {
    "fname" : fname,
    "lname" : lname,
    "radio" : radio,
    "checkbox" : checkbox,
  }

  console.log(session)
  // By using = we *replace* the entire contents of the div tag.
  myDiv.innerHTML = "\n";
  // Now, using += we are *appending* to the new contents of the div tag.
  myDiv.innerHTML += "\t\t<h1>Whoa.</h1>\n"
  // Notice here that we are appending the values of the variables.
  if (session["fname"] == "")
    {
      session["fname"] = "None"
    }
  if (session["lname"] == "")
    {
      session["lname"] = "None"
    }
  myDiv.innerHTML += "\t\t<p>" + session["fname"] + " " + session["lname"] + "</p>\n";

  // uses the data from the radio button to determine whether the user slept last night or not
  if (session["radio"])
    {
      myDiv.innerHTML += "\t\t<p>You did sleep last night. </p> \n";
    }
  else
    {
      myDiv.innerHTML += "\t\t<p>You didn't sleep last night. Hope you get some tonight. </p> \n";
    }

  // uses the data from the checkbox button to determine whether the user ate lunch
  if (session["checkbox"])
    {
      myDiv.innerHTML += "\t\t<p>You did eat lunch. </p> \n";
    }
  else
    {
      myDiv.innerHTML += "\t\t<p>You didn't eat lunch. Hope you eat soon. </p> \n";
    }

  // if there is no list containing JSONs, it creates a new one
  if (localStorage.getItem("allJSON") == null)
    {
      var allJSON = [];
    }
  // if there is, get the JSONs from local storage
  else
    {
      allJSON = JSON.parse(localStorage.getItem("allJSON"));
    }

  // adds this session's data to the JSON list
  allJSON.push(session);
  // adds the new JSON list to local storage
  localStorage.setItem("allJSON", JSON.stringify(allJSON));

  // goes back to the homepage
  myDiv.innerHTML += "<button onclick='homePage()'>Click to go back to the home page </button>";
}
function clicked()
  {
    // gets the session number from the session the user wants the data for
    myDiv.innerHTML = "<label for='fname'>Enter a number for which session (0 for 1st, 1 for 2nd, etc)</label>";
    myDiv.innerHTML += "<input id='session' name='session' type='text' />";
    myDiv.innerHTML += "<button onclick='getSessionData()'>Enter</button></br>";
    myDiv.innerHTML += "<button onclick='homePage()'>Click to go back to the home page </button>";

  }
function homePage()
  {
    // puts the index.html code in javascript form
    myDiv.innerHTML = "<p> <label for='fname'>First Name:</label><input id='fname' name='fname' type='text' onmouseover='myMouseOver(id)' onmouseout='myMouseOut(id)' onblur='blurFunc(id)'/><br />";
    myDiv.innerHTML += "<label for='lname'>Last Name:</label><input id='lname' name='lname' type='text' onmouseover='myMouseOver(id)' onmouseout='myMouseOut(id)' onblur='blurFunc(id)'/><br />";
    myDiv.innerHTML += "<label for='radio'>Did you sleep last night?</label><input id='radio' name='radio' type=\"radio\" onmouseover='myMouseOver(id)' onmouseout='myMouseOut(id)'><br />";
    myDiv.innerHTML += "<label for='checkbox'>Did you eat lunch yet?</label><input id='checkbox' name='checkbox' type=\"checkbox\" onmouseover='myMouseOver(id)' onmouseout='myMouseOut(id)'></p>";
    myDiv.innerHTML += "<button onclick='myClick()'>I'm a button, click me!</button>";
    myDiv.innerHTML += "<button onclick='clicked()'>Click for data</button>";
  }
function getSessionData()
  {
    // gets the lsit of JSONs
    allJSON = JSON.parse(localStorage.getItem("allJSON"));
    // gets the sessions number
    var sessionNum = document.getElementById('session').value;
    // using the session number to find the session the user wants
    session = allJSON[sessionNum];
    // puts all the data from that session into variables
    var fname = session["fname"];
    var lname = session["lname"];
    var radio = session["radio"];
    var checkBox = session["checkbox"];

    // displays the data
    myDiv.innerHTML = "<p> Name: " + fname + " " + lname;
    if (radio)
      {
        myDiv.innerHTML += "\t\t<p>You did sleep last night. </p> \n";
      }
    else
      {
        myDiv.innerHTML += "\t\t<p>You didn't sleep last night. Hope you get some tonight. </p> \n";
      }

    if (checkBox)
      {
        myDiv.innerHTML += "\t\t<p>You did eat lunch. </p> \n";
      }
    else
      {
        myDiv.innerHTML += "\t\t<p>You didn't eat lunch. Hope you eat soon. </p> \n";
      }

      myDiv.innerHTML += "<button onclick='homePage()'>Click to go back to the home page </button>";
  }
function myMouseOver(id)
  {
    // if the mouse is over the input area, turn green
    document.getElementById(id).style.backgroundColor = "green";
  }
function myMouseOut(id)
  {
    // if the mouse isn't over the input area, return to default color
    document.getElementById(id).style.backgroundColor = "";
  }
function blurFunc(id)
  {
    // if there is text in the fname input area and it isn't focused, make the text italics
    if (id == "fname")
      {
        document.getElementById(id).style.fontStyle ="italic";
      }
    // if there is text in the lanme input area and it isn't focused, make the text bold
    else if (id == "lname")
      {
        document.getElementById(id).style.fontWeight ="bold";
      }
  }
