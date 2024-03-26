const darkMode = document.querySelector('#dark');

let darkStat = true;


darkMode.addEventListener('click', function (event) {
    event.preventDefault();
    if (darkStat) {
        //change background and text to black and white
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        //sets dark stat to false to keep track
        darkStat = false;
    }

    else if (!darkStat) {
        //change background and text to white and black
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        //sets dark stat to true to keep track
        darkStat = true;
    }
})