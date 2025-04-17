function myFunction() {
    var x = document.getElementById("startQuiz");
      x.style.display = "none";
    }

function result() {
    var score=0
    if (document.getElementsById('correct1').checked)
    {
        score++;
    }
    alert("Your score is:+score")
}