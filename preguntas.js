import { handleClick } from './main.js'
 let pregunta = document.getElementById("pregunta")
 let botones = document.querySelectorAll("button")
 let btn1 = document.getElementById("opcion1"),
 btn2 = document.getElementById("opcion2"), 
 btn3 = document.getElementById("opcion3")
    let pregunta1 = {"pregunta":"¿como se llama el grupo de bighit ent que debuto en 2019?","A":"tomorrow by together","B":"itzy","C":"ninguna de las anteriores","ANSWER":"a"};
    let pregunta2 = {"pregunta":"¿cuantos mundiales tiene argentina?","A":"3 titulos","B":"2 titulos","C":"5 titulos","ANSWER":"a"};
    let pregunta3 = {"pregunta":"fundador de microsoft","A":"marck zunckerberg","B":"steve jobs","C":"bill gates","ANSWER":"c"};
    let pregunta4 = {"pregunta":"¿quien hizo la cancion la isla bonita?","A":"abba","B":"maddona","C":"thalia","ANSWER":"b"};
    let pregunta5 = {"pregunta":"¿en una funcion lineal que letra se la conoce a la pendiente?","A":"letra b","B":"letra m","C":"letra c","ANSWER":"b"};
     
   export let preguntas = [pregunta1,pregunta2,pregunta3,pregunta4,pregunta5]; 
    let desabilitar = ()=>{
    botones.forEach(boton =>{boton.disabled = true})
    }
    let habilitar = ()=>{
        botones.forEach(boton =>{ boton.disabled = false})
      }

 export const Prandom = (arreglo, cell, index)=>{
    habilitar()
    botones.forEach(boton =>{ boton.style.background = "rgb(38, 159, 240)"})
    let m = Math.floor(Math.random() * arreglo.length);
    let random = arreglo[m];
    pregunta.innerHTML = random.pregunta;
    btn1.innerHTML = random.A;
    btn2.innerHTML = random.B;
    btn3.innerHTML = random.C;
    btn1.value = "a"
    btn2.value = "b"
    btn3.value = "c"
    botones.forEach(boton => {
        let newButton = boton.cloneNode(true);
        boton.parentNode.replaceChild(newButton, boton);
    });

    btn1 = document.getElementById("opcion1");
    btn2 = document.getElementById("opcion2");
    btn3 = document.getElementById("opcion3");
    botones = [btn1, btn2, btn3];

    botones.forEach(boton =>{
        boton.addEventListener("click", ()=>{
            if(boton.value == random.ANSWER){
                boton.style.backgroundColor = "#7AFF33"
                desabilitar()
                handleClick(cell, index)
            }else{
                boton.style.backgroundColor = "red"
                setTimeout(()=>{
                    Prandom(preguntas, cell, index)
                },500)
            }
        })
    })
   }
        


       
