'use strict'
//body script
let stylesBody = `
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
font-family: 'Lexend Deca', sans-serif;
background-image: url(images/blur.jpg);
background-size: cover;
background-repeat: no-repeat`;

document.querySelector('body').style  = stylesBody;
//mainContainer script
document.querySelector(".mainContainer").setAttribute("style",'margin-left: -400px;width: 650px;height: 550px;  display: flex;justify-content: flex-start;align-items: left;flex-direction: column;position: absolute; background-color: #faf3f39c;backdrop-filter: blur(5px);border-top-left-radius: 25px;border-bottom-left-radius: 25px;box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2)');
//signup button
// Create a media condition that targets viewports at least 768px wide

// Check if the media query is true

let stylesSignup = `
background-color: #4CA2F7;
    border-style: none;
    border-radius: 7px;
    color: white;
    padding: 15px 75px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-left: 40px;
    cursor: pointer`;
document.querySelector('.signup').style = stylesSignup;
//sign in script
let stylesSignIn = `
color: #7B37A6;
    font-size: 11px;
    margin-left: 195px;
    margin-top: -14px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: bold;
    cursor: pointer`;
    document.querySelector('.signIn').style = stylesSignIn;
//hr script
let stylesHR = `
background-color: white;
    color: white;
    height: 3px;
    border-style: none;
    border-radius: 16px;
    width: 90px;
`
document.querySelector('hr').style = stylesHR;
//social logos
let stylesSquare = `
position: absolute;
max-height:550px;
max-width:500px;
    height:100%;  
    width: 100%;
    background-color: #F39B5A;
    margin: 100px 0 100px 500px;
    border-radius: 25px;
    z-index: 1`;
    document.querySelector('.square').style = stylesSquare;
    //´mobileIMg
    let StylesmobileImg = `
    position: relative;
    height: 100%;
    width: 100%;
    `;
    document.querySelector('.mobileImg').style = StylesmobileImg;
    //rocket style
      document.querySelector(".rocket").setAttribute(
        "style", "height: 100%; width: 100%;  z-index: 1; top:80px; margin-left: -190px; position: relative");
        
 //media query 1056px
 const mediaQuery1056 = window.matchMedia('(max-width: 1056px)')

 mediaQuery1056.addEventListener("change", e=>{
   // Check if the media query is true
   if(e.matches){
     document.querySelector(".mainContainer").setAttribute("style",'margin-left: -350px;width: 650px;height: 550px;  display: flex;justify-content: flex-start;align-items: left;flex-direction: column;position: absolute; background-color: #faf3f39c;backdrop-filter: blur(5px);border-top-left-radius: 25px;border-bottom-left-radius: 25px;box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2)');
   }
  else{
    document.querySelector(".mainContainer").setAttribute("style",'margin-left: -400px;width: 650px;height: 550px;  display: flex;justify-content: flex-start;align-items: left;flex-direction: column;position: absolute; background-color: #faf3f39c;backdrop-filter: blur(5px);border-top-left-radius: 25px;border-bottom-left-radius: 25px;box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2)');
  }
 
 })  

// Media query 1002px
const mediaQuery1002 = window.matchMedia('(max-width: 1002px)')

mediaQuery1002.addEventListener("change", e=>{
  // Check if the media query is true
  if(e.matches){
    document.querySelector(".mainContainer").setAttribute("style",'margin-left: -250px;width: 650px;height: 550px;  display: flex;justify-content: flex-start;align-items: left;flex-direction: column;position: absolute; background-color: #faf3f39c;backdrop-filter: blur(5px);border-top-left-radius: 25px;border-bottom-left-radius: 25px;box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2)');
    document.querySelector('.rocket').setAttribute("style", "height: 390px; width: 290px;  z-index: 1; top:80px; margin-left: -190px; position: relative");
    document.querySelector('.square').setAttribute("style", "position: absolute;max-height:550px;max-width:500px; height: 100%;  width: 100%;background-color: #F39B5A;margin: 100px 0 100px 400px;border-radius: 25px;z-index: 1");
    
  }
 else{
  document.querySelector('.rocket').setAttribute("style", "height: 390px; width: 360px;  z-index: 1; top:80px; margin-left: -190px; position: relative");
  document.querySelector(".mainContainer").setAttribute("style",'margin-left: -350px;width: 650px;height: 550px;  display: flex;justify-content: flex-start;align-items: left;flex-direction: column;position: absolute; background-color: #faf3f39c;backdrop-filter: blur(5px);border-top-left-radius: 25px;border-bottom-left-radius: 25px;box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2)');
  document.querySelector('.square').setAttribute("style", "position: absolute;max-height:550px;max-width:500px; height: 100%;  width: 100%;background-color: #F39B5A;margin: 100px 0 100px 500px;border-radius: 25px;z-index: 1");
  
 }

})
//media query 900
const mediaQuery900 = window.matchMedia('(max-width: 900px)')

mediaQuery900.addEventListener("change", e=>{
  // Check if the media query is true
  if(e.matches){
    document.querySelector(".mainContainer").setAttribute("style",'margin-left: -150px;width: 650px;height: 550px;  display: flex;justify-content: flex-start;align-items: left;flex-direction: column;position: absolute; background-color: #faf3f39c;backdrop-filter: blur(5px);border-top-left-radius: 25px;border-bottom-left-radius: 25px;box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2)');
    document.querySelector('.rocket').setAttribute("style", "height: 350px; width: 230px;  z-index: 1; top:80px; margin-left: -100px; position: relative");
    document.querySelector('.square').setAttribute("style", "position: absolute;max-height:550px;max-width:500px; height: 100%;  width: 100%;background-color: #F39B5A;margin: 100px 0 100px 300px;border-radius: 25px;z-index: 1");
  }
 else{
 document.querySelector(".mainContainer").setAttribute("style",'margin-left: -250px;width: 650px;height: 550px;  display: flex;justify-content: flex-start;align-items: left;flex-direction: column;position: absolute; background-color: #faf3f39c;backdrop-filter: blur(5px);border-top-left-radius: 25px;border-bottom-left-radius: 25px;box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2)');
    document.querySelector('.rocket').setAttribute("style", "height: 390px; width: 290px;  z-index: 1; top:80px; margin-left: -190px; position: relative");
    document.querySelector('.square').setAttribute("style", "position: absolute;max-height:550px;max-width:500px; height: 100%;  width: 100%;background-color: #F39B5A;margin: 100px 0 100px 400px;border-radius: 25px;z-index: 1"); 
 }

})
//media query 800px
  const mediaQuery800 = window.matchMedia('(max-width: 800px)');
  mediaQuery800.addEventListener("change", e=>{
    if(e.matches){
      document.querySelector(".mainContainer").setAttribute("style",'margin-left: -50px;width: 650px;height: 550px;  display: flex;justify-content: flex-start;align-items: left;flex-direction: column;position: absolute; background-color: #faf3f39c;backdrop-filter: blur(5px);border-top-left-radius: 25px;border-bottom-left-radius: 25px;box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2)');
    document.querySelector('.rocket').setAttribute("style", "height: 350px; width: 230px;  z-index: 1; top:80px; position: relative");
    document.querySelector('.square').setAttribute("style", "position: absolute;height: 550px;  width: 400px;background-color: #F39B5A;margin: 100px 0 100px 300px;border-radius: 25px;z-index: 1");
    }
   else{
   document.querySelector(".mainContainer").setAttribute("style",'margin-left: -150px;width: 650px;height: 550px;  display: flex;justify-content: flex-start;align-items: left;flex-direction: column;position: absolute; background-color: #faf3f39c;backdrop-filter: blur(5px);border-top-left-radius: 25px;border-bottom-left-radius: 25px;box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2)');
    document.querySelector('.rocket').setAttribute("style", "height: 350px; width: 230px;  z-index: 1; top:80px; margin-left: -100px; position: relative");
    document.querySelector('.square').setAttribute("style", "position: absolute;height: 550px;  width: 500px;background-color: #F39B5A;margin: 100px 0 100px 300px;border-radius: 25px;z-index: 1");
   }
  })

//man div style
let styleMan = `
height: 100%;
      width: 100%;
      position: absolute;
      animation: bounce 2s infinite ease-out alternate`;
      document.querySelector('.man').style = styleMan;
//or style
let styleOr = `
font-size: 13px;
padding-bottom: 3px;
margin: 8px 0 0 137px`
document.querySelector('.or').style = styleOr;
// .bottomText class
let StylebottomText = `
 margin: 7px 0 0 40px;
    font-size: 12px;
    font-weight: bold`
document.querySelector('.bottomText').style = StylebottomText;
// small text
/*let styleSmallText = `
padding-top: 10px;
padding-left: 3px;
line-height: 23px`;
document.querySelector('div .smallText').style = StyleSmallText;
*/
/* como fazer o style no javascript sem ser in-line
<style id="targetStyle">
  .something{
    height : 100px;
  }
</style>
and then in your javascript

var styleDom = document.getElementById('targetStyle');
styleDom.innerHTML = styleDom.innerHTML.replace(/height.*px;/,'height: 85px;');*/