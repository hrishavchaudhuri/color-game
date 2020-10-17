//INITIAL GAME START
let difficulty=6;

//DECLARING FUNCTIONS randomcolor function
const randomColor=()=>{
    //pick a red from 0-255
    let r=Math.floor(Math.random() * 256);
    //pick a green from 0-255
    let g=Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    let b=Math.floor(Math.random() * 256);
    // console.log(typeof r,typeof g,typeof b);
    return "rgb(" + r + ", "  +  g + ", "  + b + ")"  ;
};

//DECLARING FUNCTIONS generaterandomcolor function
//randomcolor function is called inside of this function
const generateRandomColors=num=>{
    //make an array
    let arr=[];
    //add num random colors to array(we need to repeat smething num no.of times)
    for(let i=0;i<num;i++){
        arr.push(randomColor());
    }
    //return that array
    return arr;
};

//DECLARING FUNCTIONS
const pickColor=()=>{
    let random=Math.floor(Math.random()*colors.length);
    return colors[random];
};


//SELECTING 
let colors=generateRandomColors(difficulty);
let squares=document.querySelectorAll(".square");
let pickedColor=pickColor();
let colorDisplay=document.getElementById("colorDisplay");
let messageDisplay=document.getElementById("message");
let h1color=document.querySelector("h1");
let resetButton=document.getElementById("reset");
let easyButton=document.getElementById("easyButton");
let hardButton=document.getElementById("hardButton");

//EASY BUTTON 
easyButton.addEventListener("click",()=>{
    // alert("clicked on easy button!");
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    difficulty=3;
    colors=generateRandomColors(difficulty);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    // for(let i=3;i<squares.length;i++){
    //     squares[i].style.display="none";
    // }
    for(let i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
                
    }
});


//HARD BUTTON
hardButton.addEventListener("click",()=>{
    // alert("clicked on hard button!");
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    difficulty=6;
    colors=generateRandomColors(difficulty);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    // for(let i=3;i<squares.length;i++){
    //     squares[i].style.display="none";
    // }
    for(let i=0;i<squares.length;i++){
       squares[i].style.backgroundColor=colors[i];
       squares[i].style.display="block";              
    }
});


//RESET BUTTON
resetButton.addEventListener("click",()=>{
    //generate all new colors
    colors=generateRandomColors(difficulty);
    //pick a random color
    pickedColor=pickColor();
    //change colordisplay=picked color
    colorDisplay.textContent=pickedColor;
    resetButton.textContent="New Colors"
    //change color of squares
    for(let i=0;i<squares.length;i++){
        squares[i].style.background=colors[i];
    }
    h1color.style.backgroundColor="steelblue";
    messageDisplay.textContent="";
});

//MAKING THE DISPLAY,DISPLAY COLOR TO BE THE WIN!
colorDisplay.textContent=pickedColor;


//MAKING THE GAME, GIVING IT LOGIC
for(let i=0;i<squares.length;i++){
    //add initial colors
    
    squares[i].style.background=colors[i];
    //add click listeners
    squares[i].addEventListener("click",function() {
        //grab color of clicked square
        let clickedColor=squares[i].style.background;
        // console.log(clickedColor, typeof clickedColor,typeof pickedColor);
        //compare to clicked color
        console.log(clickedColor,pickedColor);
        if(clickedColor === pickedColor)
        {
            messageDisplay.textContent="CORRECT!!";
            resetButton.textContent="Play Again?";
            for(let i=0;i<squares.length;i++){
                squares[i].style.backgroundColor=clickedColor;
            }
            h1color.style.backgroundColor=pickedColor;
        }
        else {
            this.style.backgroundColor = "#232323" ;
            messageDisplay.textContent="Try Again!";
        }
    });
}
