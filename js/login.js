//Rules button
function Show(id)
{
  if (document.getElementById(id).style.display == 'none') {
       document.getElementById(id).style.display = 'block';
  }
  else {
       document.getElementById(id).style.display = 'none';
  }
};

//Submit Button
function Verify() {
  var userRef = "venusvalue";
  var passRef = "Somos0venus@";
  
  var user =  document.getElementById("username").value;
  var pass = document.getElementById("password").value;


  if (user == userRef || pass == passRef) {
    window.location.replace("https://portifolio.venusvalue.com");
  } else {
  alert("It's seem you make a mistake...")
  }
};