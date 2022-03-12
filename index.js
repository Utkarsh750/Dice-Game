function playGame()
{
    var ew = new Audio('roll.mp3')
    ew.play();

    var randomNumberOne = Math.floor(Math.random()*6)+1;
    var randomImageOnePath = "image/"+ "dice" +randomNumberOne+".png";

    var randomNumberTwo = Math.floor(Math.random()*6)+1;
    var randomImageTwoPath = "image/"+ "dice" +randomNumberTwo+".png";

    var image1 = document.querySelectorAll("img")[0]
    image1.setAttribute("src",randomImageOnePath);

    var image2 = document.querySelectorAll("img")[1]
    image2.setAttribute("src",randomImageTwoPath);

    if(randomNumberOne>randomNumberTwo)
    {
        document.querySelector("h1").innerHTML= "Player 1 winsss 💖";

    }
    else if(randomNumberTwo>randomNumberOne)
    {
        document.querySelector("h1").innerHTML= "Player 2 winsss 💘";
    }
    else{
        document.querySelector("h1").innerHTML= "Aaahhh its Draw 😬";
        var fail = new Audio('fail.mp3');
        fail.play();
       }
}


document.querySelector("button").addEventListener("click",playGame);