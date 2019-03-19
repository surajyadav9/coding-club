
/* slider */

//cacheInTheDOM

let imgArr = [{image:`${'img/about.jpeg'}`,color:`${'#439D83'}`},{image:`${'img/img1.jpg'}`,color:`${'#2C3E50'}`},{image:`${'img/img2.jpg'}`,color:`${'#649D43'}`},{image:`${'img/img4.jpg'}`,color:`${'#553963'}`}];
let imgPtr = 0;


let leftIcon_i = document.getElementById('left-arrow').addEventListener('click',moveLeft),
    rightIcon_i = document.getElementById('right-arrow').addEventListener('click',moveRight);
;


//body

function moveLeft(){
    //alert('left arrow clicked');
    if(imgPtr == 0)
    {
        imgPtr = 3;
    }
    else
    {
        imgPtr -= 1;
    }
    
   
    document.querySelector('.showcase-info').style.backgroundImage = "url("+imgArr[imgPtr].image+")";
    document.querySelector('#showcase').style.backgroundColor = ""+imgArr[imgPtr].color+"";

}

function moveRight(){
    //alert('right arrow clicked');
    
    if(imgPtr == 3)
    {
        imgPtr = 0;
    }
    else
    {
        imgPtr += 1;
    }
    
   
    document.querySelector('.showcase-info').style.backgroundImage = "url("+imgArr[imgPtr].image+")";
    document.querySelector('#showcase').style.backgroundColor = ""+imgArr[imgPtr].color+"";
}

function defaultRender(){
    setTimeout(() => {
        imgPtr = 0;
        moveRight();
    },1000);
}




