let name = prompt("Siapa Nama Kamu?");
while (name == "") {
    alert("Diisi dong namanya :(");
    name = prompt("Siapa Nama Kamu?");
}
document.write('<div class="loading"> <h2>2022</h2> <div class="bar"></div> <h2>2023</h2> </div>');
document.write('<div class="center"> <div><h2>Happy New Year</h2></div> <div></div> <div><h2>2023</h2></div> <div></div> <div><h2>'+ name +' !<h2></div> <div></div> </div>');
x = Math.floor(Math.random()*10)+1;
function wordShuffle() {
    if (x == 1) {
        document.getElementById("word").innerHTML = 'Happy New Year! 2023 is the beginning of a new chapter. This is your year. Make it happen!';
        document.getElementById("word").style.fontSize = '1.6em';
    }
    else if (x == 2) {
        document.getElementById("word").innerHTML = "Life is an adventure that's full of beautiful destinations. Wishing you many wonderful memories made in 2023";
        document.getElementById("word").style.fontSize = '1.4em';
    }
    else if (x == 3) {
        document.getElementById("word").innerHTML = "Wishing you a Happy New Year, bursting with fulfilling and exciting opportunities. And remember, if opportunity doesn't knock, build a door!";
        document.getElementById("word").style.fontSize = '1.2em';
    }
    else if (x == 4) {
        document.getElementById("word").innerHTML = "Happy New Year! Let's toast to yesterday's achievements and tomorrow's bright future";
        document.getElementById("word").style.fontSize = '1.6em';
    }
    else if (x == 5) {
        document.getElementById("word").innerHTML = "Wishing you 12 months of success, 52 weeks of laughter, 365 days of fun, 8760 hours of joy, 525600 minutes of good luck, and 31536000 seconds of happiness. Happy New Year!";
    }
    else if (x == 6) {
        document.getElementById("word").innerHTML = "A new year. A fresh, clean start! It's like having a big white sheet of paper to draw on! A day full of possibilities!";
        document.getElementById("word").style.fontSize = '1.3em';
    }
    else if (x == 7) {
        document.getElementById("word").innerHTML = "Enjoy the little things in life, for one day you may look back and realize they were the big things";
        document.getElementById("word").style.fontSize = '1.5em';
    }
    else if (x == 8) {
        document.getElementById("word").innerHTML = "Although no one can go back and make a brand new start, anyone can start from now and make a brand new ending";
        document.getElementById("word").style.fontSize = '1.4em';
    }
    else if (x == 9) {
        document.getElementById("word").innerHTML = "It's time to make way for the new, to reaffirm and dream afresh, to embrace new joys and embark on new voyages. This new year wishing you success. Happy New Year!";
    }
    else {
        document.getElementById("word").innerHTML = "Happy hibernation!";
        document.getElementById("word").style.fontSize = '2.5em';
    }
    document.getElementById("butt").style.opacity = '0';
}