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
  // By using = we *replace* the entire contents of the div tag.
  myDiv.innerHTML = "\n";
  // Now, using += we are *appending* to the new contents of the div tag.
  myDiv.innerHTML += "\t\t<h1>Whoa.</h1>\n"
  // Notice here that we are appending the values of the variables.
  myDiv.innerHTML += "\t\t<p>" + fname + " " + lname + "</p>\n";

  if (radio)
    {
      myDiv.innerHTML += "\t\t<p>You did sleep last night. </p> \n";
    }
  else
    {
      myDive.innerHTML += "\t\t<p>You didn't sleep last night. Hope you get some tonight. </p> \n";
    }
  if (checkbox)
    {
      myDiv.innerHTML += "\t\t<p>You did eat lunch. </p> \n";
    }
  else
    {
      myDive.innerHTML += "\t\t<p>You didn't eat lunch. Hope you eat soon. </p> \n";
    }
}
