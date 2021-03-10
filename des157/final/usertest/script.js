(function(){
    "use strict";
    console.log("reading js");

    window.addEventListener('load', function () {
        'use strict'

        myFunction();

        /* variables used to make up the image slider */
        let sliderContent;
        let sliderWidth;
        let fullSlider = document.querySelector('body');
        const clonedSlider = fullSlider.innerHTML;
    
        /* This is the slider animation function  */
        function animateSlider() {
            sliderContent = document.querySelector('.a');
            sliderWidth = sliderContent.offsetWidth;
            const cloned = sliderContent.cloneNode(true);
            cloned.className = "b";
            document.querySelector('#slider').appendChild(cloned);
            document.querySelector('#slider').style.left = `-${sliderWidth}px`;
            repeatAnimation();
        }
    
        /* This function repeats the slider motion going from left to right */
        animateSlider();
        function repeatAnimation() {
            fullSlider.addEventListener("transitionend", function () {
                console.log('going around again!');
                document.querySelector('body').innerHTML = clonedSlider;
                fullSlider = document.querySelector('#slider');
                animateSlider();
            });
        }
    });
    
    function myFunction() {
        alert("Hi, welcome to Ivy’s travel plog (picture log): 1. Scroll across the image slider to view the different images 2. Click on a select image 3. View the new contents on the new page 4. Find the return to homepage instruction and return to homepage 5. Repeat the steps if desired");
    }

}());