// click the icon

// convert images
const e1 = ["hmg/v2.jpeg","hmg/s12.webp","hmg/s11.webp"]
const e2 = ["hmg/s12.webp","hmg/66cNaf.jpg","hmg/pexels-photo-3.jpeg"]
const e3 = ["hmg/s11.webp","hmg/R.jpeg"] 
var x = 0
setInterval(()=>{
    document.querySelector('.imag').src = e1[x]
    x++;
    if(x>=3){
        x=0
    }
},3000);
var y = 0
setInterval(()=>{
    document.querySelector('.imag1').src = e2[y]
    y++;
    if(y>=4){
        y=0
    }
},3000);
var y = 0
setInterval(()=>{
    document.querySelector('.imag2').src = e3[y]
    y++;
    if(y>=3){
        y=0
    }
},3000);
