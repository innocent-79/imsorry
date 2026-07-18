window.onload = function(){

    const button = document.getElementById("openBtn");
    const box = document.getElementById("letterBox");
    const openBox = document.getElementById("openLetter");
    const letterImage = document.getElementById("letterImage");


   
    button.style.display = "none";


   
    setTimeout(function(){

        button.style.display = "block";
        button.style.animation = "dropBounce 1s ease-out";

    },1800);



    
    button.onclick = function(){

        
        box.style.display = "none";


        
        openBox.style.display = "block";
        openBox.style.animation = "openAnimation 1s ease";


    
        button.style.display = "none";


     
        setTimeout(function(){

            letterImage.classList.remove("hidden");
            letterImage.style.animation = "letterUp 1.5s ease-out";

        },500);


    }

}
letterImage.onclick = function(){

    letterImage.style.animation = "pageExit 0.8s ease forwards";

    setTimeout(function(){

        window.location.href = "letter.html";

    },800);

};