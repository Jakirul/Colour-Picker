const colourinput = document.querySelector("#colour-picker");
const btn = document.querySelector("button");
const h2 = document.querySelector("h2");

btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    const colourinputs = colourinput.value;
    h2.innerText = `Showing the result for: ${colourinputs}`
    document.body.style.backgroundColor = colourinputs;
  
    
    
})