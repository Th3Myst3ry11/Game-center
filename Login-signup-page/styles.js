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
const mediaQuery2 = window.matchMedia('(max-width: 1052px)')
// Check if the media query is true
if (mediaQuery2.matches) {
  // Then trigger an alert
  document.querySelector('.mainContainer').setAttribute("style", 'margin-left: -300px;width: 650px;height: 550px;  display: flex;justify-content: flex-start;align-items: left;flex-direction: column;position: absolute; background-color: #faf3f39c;backdrop-filter: blur(5px);border-top-left-radius: 25px;border-bottom-left-radius: 25px;box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2)');
}
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
    height: 550px;  
    width: 500px;
    background-color: #F39B5A;
    margin: 100px 0 100px 500px;
    border-radius: 25px;
    z-index: 1`;
    document.querySelector('.square').style = stylesSquare;
    //´mobileIMg
    let StylesmobileImg = `
    position: relative;
    height: 550px;
    width: 700px;
    margin-left: -70px;
    `;
    document.querySelector('.mobileImg').style = StylesmobileImg;
    //rocket style

      document.querySelector(".rocket").setAttribute(
        "style", "height: 390px; width: 360px;  z-index: 1; top:80px; margin-left: -190px; position: relative");
// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(max-width: 1052px)')
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  document.querySelector('.rocket').setAttribute("style", "height: 390px; width: 300px;  z-index: 1; top:80px; margin-left: -190px; position: relative");
}
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