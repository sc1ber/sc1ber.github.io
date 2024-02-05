const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})

function updateProgressBar(percentage) {
  const progressBarFilled = document.querySelector('.progress-bar-filled');
  progressBarFilled.style.width = percentage;
  progressBarFilled.setAttribute('data-filled', 'loading page ' + percentage );
}

async function open_terminal(){
  updateProgressBar('0%');
  await delay(2000); 
  let currentPercentage = 0;
  const interval = setInterval(async function () {
    currentPercentage += 1;
      if (currentPercentage > 100) {
          clearInterval(interval);
          await delay(1000);
          document.getElementById('loading-bar').remove();
          welcome();
      } else {
          updateProgressBar(currentPercentage + '%');
      }
  }, 50);
  
}

function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  const span3 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "user@sc1ber";
  span1.textContent = ":";
  span2.textContent = "~/sc1ber";
  span3.textContent = "$";
  p.appendChild(span1);
  p.appendChild(span2);
  p.appendChild(span3);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-chevron-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function welcome(){
  await delay(1000);
  createText("Hello")
  await delay(1500);
  createText("################################")
  aboutOutput();
  createText("################################")
  await delay(1500);
  createText("try these commands:")
  commandsOutput();
  await delay(500);
  new_line();
}

function aboutOutput(){
  createText("<i class='fa-solid fa-user'></i><span class ='success'> Name: </span>Samuel II Imperial")
  createText("<i class='fa-solid fa-graduation-cap'></i><span class ='success'> Education: </span>BS in Computer Engineering")
  createText("with Specialization in Cybersecurity")
  createText("Mapúa University (2018-2023)")
  createText("<i class='fa-solid fa-location-dot'></i><span class ='success'> Location: </span>Quezon City, Philippines")
}

function commandsOutput(){
  createCode("commands", "list all commands")
  createCode("about", "who am i?")
  createCode("social", "all my social networks")
  createCode("contact", "get in touch")
  createCode("clear","clean terminal")
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "commands"){
    trueValue(value);
    commandsOutput();
  }
  else if(value === "about"){
    trueValue(value);
    aboutOutput();
  }
  else if(value === "social"){
    trueValue(value);
    createText("<a href='https://github.com/sc1ber/' target='_blank'><i class='fab fa-github'></i><span class ='success'> Github: </span>sc1ber (click me)</a>")
    createText("<a href='https://www.linkedin.com/in/samuel-ii-imperial-b4b695201/' target='_blank'><i class='fa-brands fa-linkedin'></i><span class ='success'> Linkedin: </span>Samuel II Imperial (click me)</a>")
  }  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else if(value === "help"){
    falseValue(value);
    createText("try <span class='success'>commands</span>")
  }
  else{
    falseValue(value);
    createText(`command not found: <span class='error'>${value}</span>`)
    createText("try <span class='success'>commands</span>")
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-chevron-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "success")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-chevron-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();