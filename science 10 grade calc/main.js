

function finalGrade() {
  console.log("page is running");
  var x = document.getElementById("first").value;
  var y = document.getElementById("second").value;
  var z = document.getElementById("third").value;

  var avg = (x + y + z) / 3;

  document.getElementById("out").innerHTML = avg;
}
