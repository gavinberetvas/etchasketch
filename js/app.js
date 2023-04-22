const main = document.querySelector('.main');
const button = document.querySelector("button[id='reset']");
const slider = document.getElementById("myRange");
const sliderValue = document.getElementById("sliderAmount");
let isDragging = false;

slider.addEventListener("mousemove", function() {
    sliderValue.innerHTML = `${this.value} * ${this.value}`;
  });
slider.addEventListener("mouseup", function() {
    main.innerHTML = "";
    boardState(this.value);  
  });

let num = 64;
boardState(num);

reset.addEventListener("click", function(){
    main.innerHTML = "";
    boardState(slider.value); 
});

function boardState(num){         
    for (i = 0; i < num; i++){
        const piece = document.createElement('div');
        piece.classList.add('content');
        piece.classList.add(`${i + 1}`);
        //piece.textContent = `${i}`;
        main.appendChild(piece);
        piece.style.width = "500px";
        piece.style.height = `${500 / num}px`;

        for (j = 0; j < num; j++){
            const subpiece = document.createElement('div');
            subpiece.classList.add('subcontent');
            piece.classList.add(`${j + 1}`);
            //subpiece.textContent = ` ${j + 1}`;
            piece.appendChild(subpiece);
            subpiece.style.width = `${500 / num}px`;
            subpiece.style.height = `${500 / num}px`;  
            
            subpiece.addEventListener("mousedown", function() {
                subpiece.style.backgroundColor = "blue";
                isDragging = true;
            });
            subpiece.addEventListener("mousemove", function() {
                if (isDragging) {
                    subpiece.style.backgroundColor = "blue";
                }
            }); 
            subpiece.addEventListener("mouseup", function(){
                isDragging = false;
            });
            } 
        }
}



