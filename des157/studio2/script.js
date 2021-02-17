(function(){
    "use strict";
    console.log("reading js");

        // below is the timed slideshow function, where the photos are set to change every two seconds
        const myImages = [
        'image1.jpg', 
        'image2.jpg', 
        'image3.jpg', 
        'image4.jpg', 
        'image5.jpg'];
    
        let currentImage = 0;
        const slide = document.getElementById('myimage');

        // function that change one image to the next
        function nextPhoto(){
            currentImage++; 

            if (currentImage > myImages.length-1) {
            currentImage = 0;
            }
            slide.src =`images/${myImages[currentImage]}`;
        }

        // this is the rule that creates the timed effect
        setInterval( function () { slide.innerHTML += nextPhoto(); }, 2000 );

        // below are the functions for the overlay
        const openBtns = document.querySelectorAll('.open');
        const closeBtns = document.querySelectorAll('.close');
    
        // when a sepecific button is clicked, a specific overlay element will be visible/hidden
        for (const eachBtn of openBtns) {
            eachBtn.addEventListener('click', function (event) {
                event.preventDefault();
                const thisBtn = event.target.id;
                document.getElementById(`ol-${thisBtn}`).className = 'overlay showing';
    
            });
        }
        
        for (const eachBtn of closeBtns) {
            eachBtn.addEventListener('click', function (event) {
                event.preventDefault();
                document.querySelector('.showing').className = 'overlay hidden';
    
            });
        }
    
        // when the escape key is pressed, the overlay will be hidden
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                document.querySelector('.showing').className = 'overlay hidden';
            }
        });


}());