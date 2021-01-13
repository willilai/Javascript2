// Just check to see that we found the div element we are looking for
myDiv = document.getElementById("myDiv");
console.log(myDiv);

// Click event to attach to button
function myClick () {
  // Quick check to verify that the function executes.
  console.log("test function");
  // Get the values that were input into the two text boxes.
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var radio = document.getElementById('radio').checked;
  var checkbox = document.getElementById('checkbox').checked;
  console.log(fname, lname);

  myJSON = {
    "fname" : fname,
    "lname" : lname,
    "radio" : radio,
    "checkbox" : checkbox,
  }

  console.log(myJSON)
  // By using = we *replace* the entire contents of the div tag.
  myDiv.innerHTML = "\n";
  // Now, using += we are *appending* to the new contents of the div tag.
  myDiv.innerHTML += "\t\t<h1>Whoa.</h1>\n"
  // Notice here that we are appending the values of the variables.
  if (myJSON["fname"] == "")
    {
      myJSON["fname"] = "None"
    }
  if (myJSON["lname"] == "")
    {
      myJSON["lname"] = "None"
    }
  myDiv.innerHTML += "\t\t<p>" + myJSON["fname"] + " " + myJSON["lname"] + "</p>\n";

  localStorage.setItem("myJSON", JSON.stringify(myJSON));

  if (myJSON[radio])
    {
      myDiv.innerHTML += "\t\t<p>You did sleep last night. </p> \n";
    }
  else
    {
      myDiv.innerHTML += "\t\t<p>You didn't sleep last night. Hope you get some tonight. </p> \n";
    }

  if (myJSON[checkbox])
    {
      myDiv.innerHTML += "\t\t<p>You did eat lunch. </p> \n";
    }
  else
    {
      myDiv.innerHTML += "\t\t<p>You didn't eat lunch. Hope you eat soon. </p> \n";
    }
}
function clicked()
  {
    myJSON = JSON.parse(localStorage.getItem("myJSON"));
    myDiv.innerHTML = "<br />";
    myDiv.innerHTML += myJSON["fname"];
    myDiv.innerHTML += "<br />";
    myDiv.innerHTML += myJSON["lname"];
    myDiv.innerHTML += "<br />";
    myDiv.innerHTML += myJSON["radio"];
    myDiv.innerHTML += "<br />";
    myDiv.innerHTML += myJSON["checkbox"];
  }
