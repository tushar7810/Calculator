let string = "";
let btns = document.querySelectorAll(".button");
let cntr = document.querySelector(".containor");
cntr.computedStyleMap.boxShadow = "10px 20px 30px white";
Array.from(btns).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector(".input").value = string;
        }
        else if(e.target.innerHTML == "C"){
            string = "";
            document.querySelector(".input").value = string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector(".input").value = string;
        }
    })
})
let hed = document.querySelector("h1");
hed.style.color = "white";
hed.style.border = "3px solid white";
hed.style.boxShadow = "5px 10px 15px white";