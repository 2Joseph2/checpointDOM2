function generate() {
    let c = "#";

    
    let r = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    let g = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    let b = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');

    
    c = c + r + g + b;
    return c;
}

document.addEventListener('DOMContentLoaded',() =>{
    document.getElementById("change-color-btn").addEventListener('click',()=>{
        document.getElementById("color-box").style.backgroundColor=generate()
    })
})
