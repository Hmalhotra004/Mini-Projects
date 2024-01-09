function run(){
    var randomNum_1 = Math.floor(Math.random() * 6) + 1;
    var randomdice = "dice" + randomNum_1 + ".png";
    var randomImagesrc = "./images/" + randomdice;
    var image_1 = document.querySelectorAll("img")[0];
    image_1.setAttribute("src",randomImagesrc);

    var randomNum_2 = Math.floor(Math.random() * 6) + 1;
    var randomdice_2 = "dice" + randomNum_2 + ".png";
    var randomImagesrc_2 = "./images/" + randomdice_2;
    var image_2 = document.querySelectorAll("img")[1];
    image_2.setAttribute("src",randomImagesrc_2);

    if(randomNum_1 > randomNum_2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }
    else if(randomNum_1 < randomNum_2){
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!!";
    }
}