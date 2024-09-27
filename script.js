let password = document.querySelector(".password");
let btn = document.querySelector("button");
let passwordLength = document.querySelector("#passlen");
let rangeInput = document.querySelector("#range");
let upperCaseid=document.querySelector("#uppercase");
let numberid=document.querySelector("#numbers");
let symbolid=document.querySelector("#symbols");

// let isUpper =false ;
// let isNumber =false ;
// let isSymbol =false;

//problem:::::
//create random character //Done in JS_Day folder
let newValue = 8;

rangeInput.addEventListener("input", (event) => {
  newValue =+event.target.value;
  
  passwordLength.innerText = newValue;
});


const RandomNumber = () => {
let isUpper=upperCaseid.checked;
let isNumber=numberid.checked;
let isSymbol=symbolid.checked;

// console.log(isUpper,isNumber,isSymbol);

  let lower="abcdefghijklmnopqrstuvwxyz";
  let upper=isUpper ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
  let number=isNumber ? "0123456789" : "";
  let symbol=isSymbol ? "!@#$%^&*()_+" : "";

  const passChar =upper+lower+number+symbol;
  let dummyPass="";
  // console.log(dummyPass);
  for (let i = 0; i < newValue; i++) {
    dummyPass += passChar[Math.floor(Math.random() * (passChar.length))];
  }
  password.innerText = dummyPass;
  // console.log(Pass);
};

/***************************************************************/
/*Practice more                                                */
/*Know more About navigator.clipboard.(....)                   */
/***************************************************************/


password.addEventListener("click",(e)=>{
  if(e.target.innerText.length > 0){
    navigator.clipboard.writeText(password.innerText).then(()=>{
      alert("Copied to clipboard");
    }).catch(()=>{
      alert("Could not copy");
    });
  }
});

btn.addEventListener("click",RandomNumber);