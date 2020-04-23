// img unsplash.com there are free images to use.
class Slider {
    constructor(imgTag,prevBtn,nextBtn){
        this.imgTag=document.getElementsByTagName("img")[0];
        this.prevBtn=document.getElementsByTagName("button")[0];
        this.nextBtn=document.getElementsByTagName("button")[1];
        let images = [
            "https://images.unsplash.com/photo-1587583770025-32851bad462e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            "https://images.unsplash.com/photo-1587583504540-fee44864486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            "https://images.unsplash.com/photo-1587575494201-11fe74d90d38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        ];
        let counter = 0;
        this.imgTag.src=images[counter];
        this.prevBtn.addEventListener("click",this.slideToPrev);
        this.nextBtn.addEventListener("click",this.slideToNext);
    }

    slideToNext(){
        //console.log(counter+" >");
        this.counter++;
        if(this.counter === this.images.length){
            this.counter = 0;
        }
        if(this.counter < this.images.length){
            let nextSlide = this.images[counter];
            imgTag.src = nextSlide;
        }
    }
    slideToPrev(){
        //console.log(counter+" <");
        this.counter--;    
        if(this.counter < 0){
            this.counter = this.images.length-1;
        }
        if(this.counter >= 0){
            let prevSlide = this.images[counter];
            imgTag.src = prevSlide;
        }
    }
    slide(){
        /** direction: next or previous slide */
        /** currentSlide: which image (index of the images array is visible) */
        /** container for that image: img-tag to replace the src attribute */
        let currentSlide = this.images[counter];
    
    }
};

let mySlider = new Slider();

