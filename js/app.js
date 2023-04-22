let board = document.querySelector('.board')
let color = "black";
const slider = document.getElementById("myRange");
const sliderValue = document.getElementById("sliderAmount");
let isDragging = false;
click = false;

makeBoard(64);

slider.addEventListener("mousemove", function() {
    sliderValue.innerHTML = `${this.value} * ${this.value}`;
  });

  slider.addEventListener("mouseup", function() {
    board.innerHTML = "";
    makeBoard(this.value);  
  });

  function makeBoard(size){
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for(let i = 0; i < `${size}` ** 2; i++) {
        let square =document.createElement('div');
        square.addEventListener('mouseover', colorSquare)
        square.addEventListener('mousedown', colorSquare)
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }}

    function colorSquare(){
        if (click) {
        this.style.backgroundColor = color;
        }
        if (color === "wild" && (click)) {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
          }
    }

    document.addEventListener("mousedown", function() {
        click = true;
    });
    document.addEventListener("mouseup", function() {
        click = false;
    });

    function changeColor(choice){
        color = choice;
    }

    function reset(){
        board.innerHTML = "";
        makeBoard(slider.value);  
    }