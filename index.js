document.getElementById("hello").innerHTML
    = `
<h1 id="heading">Hello Guys, This is my First Task </h1> 
<p id="paragraph">I've Created a Calculator Using Frontend (Html, Css, JS)</p>
 <button id="mybtn"><a href="main.html" id="link"> Click Here to See The Calculator </a></button>`;

//CSS

const container = document.getElementById("hello");
container.style.textAlign = "center";
container.style.marginTop = "100px";
container.style.fontFamily = "sans-serif";


//Styling heading

const heading =
    document.getElementById("heading");
heading.style.color = "#408cbf"
heading.style.fontSize = "40px"
heading.style.paddingBottom = "20PX"
heading.style.fontFamily = "sans-serif";


//Style The Button
const btn = document.getElementById("mybtn");
btn.style.padding = "10px 20px";
btn.style.fontSize = "18px";
btn.style.backgroundColor = "#8cc9f2";
btn.style.border = "none";
btn.style.borderRadius = "8px";
btn.style.cursor = "pointer";
btn.style.marginTop = "60PX"



const linko = document.getElementById("link");
linko.style.textDecoration = "none";
linko.style.color = "black";



// paragraph styling

const para = document.getElementById("paragraph");
para.style.fontWeight= "bold";
para.style.color= "black";
para.style.position= "relative";
para.style.bottom= "45px";
