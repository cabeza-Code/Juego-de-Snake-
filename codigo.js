window.onload = inicio;

function inicio() {
  let caja = document.querySelector('.caja')
  let cabeza = document.querySelector('.cabeza')
  let manzana = document.querySelector('.manzana')
    let uno = document.querySelector('.uno')
    let dos = document.querySelector('.dos')
    let tres = document.querySelector('.tres')
    let cuatro = document.querySelector('.cuatro')
    
    let x = 0;
    let y = 0;
    let xv = 0;
    let yv = 0;
    let tiempo = 300;
    let ancho = caja.getBoundingClientRect().width;
    let alto = caja.getBoundingClientRect().height;
    let a = Math.floor(Math.random()*ancho)
    let b = Math.floor(Math.random()*alto)
    
    manzana.style.left = `${a}px`
    manzana.style.top = `${a}px`
    
    setInterval(function() {
        x += xv;
        y += yv;
        
 cabeza.style.transform = `translatex(${x}px)`+
                           `translatey(${y}px)`;
                                 
let ct = cabeza.getBoundingClientRect().top;  
let cl = cabeza.getBoundingClientRect().left;
let cr = cabeza.getBoundingClientRect().right;  
let cb = cabeza.getBoundingClientRect().bottom;  
let mt = manzana.getBoundingClientRect().top;  
let ml = manzana.getBoundingClientRect().left;
let mr = manzana.getBoundingClientRect().right;  
let mb = manzana.getBoundingClientRect().bottom;  
        
        let cola = document.createElement("div")     
        caja.appendChild(cola)      
        cola.classList.add("cola")      
        cola.style.top = `${ct}px`   
        cola.style.left = `${cl}px`     
        
        setInterval(function() {
            cola.remove()
        },tiempo)
        
         let aa = Math.floor(Math.random()*ancho)
         let bb = Math.floor(Math.random()*alto)
         
         if(cl < mr -10 && cr > ml && 
            ct < mb && cb > mt) {
             manzana.style.left = `${aa}px`
             manzana.style.top = `${bb}px`
             tiempo += 200;
         }
         
let cajaw = caja.getBoundingClientRect().width;
let cajah = caja.getBoundingClientRect().height;
       
                  
         if(cr + 21 > cajaw ||  cl -21 < 0) {
            xv = 0            
         }
         if(ct -20 < 0 || cb + 20> cajah) {          
            yv = 0 
         }         
         if(mr > cajaw) {
            manzana.style.left = '100px'
            manzana.style.top = '100px'
         }
    },200)
        
    uno.addEventListener('click', arriba)
    dos.addEventListener('click', derecha)
    tres.addEventListener('click', abajo)
    cuatro.addEventListener('click', izquierda)
    
    function arriba() {
        yv = -21
        xv = 0
    }
    
    function abajo() {
        yv = 21
        xv = 0
    }
    
    function izquierda () {
        xv = -21
        yv = 0
    }
    
    function derecha() {
        xv = 21
        yv = 0
    }
    
}//llave final












