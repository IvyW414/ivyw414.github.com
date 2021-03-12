(function(){
    "use strict";
    console.log("reading js");

    window.addEventListener('load', function () {
        'use strict'

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

}());