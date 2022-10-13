let input = document.getElementById('input');
let ucaseBtn = document.getElementById('ucase');
let lcaseBtn = document.getElementById('lcase');
let capBtn = document.getElementById('cap');
let copyBtn = document.getElementById('copy');
let remSpaceBtn = document.getElementById('remove');
let clrBtn = document.getElementById('clear');
let preview = document.getElementById('preview');
let wordCountDisplay = document.getElementById('wordCount');
let charCountDisplay = document.getElementById('charCount');
let minsDisplay = document.getElementById('min');
let approx = document.getElementById('approx');



input.addEventListener('input',liveText);
function liveText(){
  //preview
  preview.innerText = input.value;
  if(input.value=='')
  preview.innerText ='See here for the text preview';

  let inp = input.value;
  //word count
  let words = inp.split(' ')
  let wordCount = words.length;
  for( let word of words){
    if(word=='' || word==' ')
      wordCount--;
  }
  wordCountDisplay.innerHTML = wordCount;
  
  // char count
  let char = 0
  for(let character of inp){
    if(character !==' ')
      char++
  }
  charCountDisplay.innerText = char;

  //Minute to read
  let minToRead= wordCount/200;
  minsDisplay.innerText = minToRead;
  let sec = (minToRead -parseInt(minToRead))*(0.60);
  let min = parseInt(minToRead) + parseInt(sec);
  approx.innerHTML = "<i>(Approximately "+min+" minutes "+Math.round((sec-parseInt(sec))*100)+" seconds)</i>";
  
  
}

ucaseBtn.addEventListener('click', upperCase);
function upperCase(){
  preview.innerText = input.value.toUpperCase();
  input.value = input.value.toUpperCase();
}
lcaseBtn.addEventListener('click', lowerCase);
function lowerCase(){
  preview.innerText = input.value.toLowerCase();
  input.value = input.value.toLowerCase();
}

capBtn.addEventListener('click',capitalise);
function capitalise(){
  let temp = input.value.toLowerCase().split(' ');
    let temp2 = []
    for(let word of temp){
      temp2.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    preview.innerText = temp2.join(' ')
    input.value = temp2.join(' ')
}

copyBtn.addEventListener('click', copyText);
function copyText(){
  navigator.clipboard.writeText(input.value);
  setTimeout(()=>{document.getElementById('endStatus').style.display = 'inline'},0);
  setTimeout(()=>{document.getElementById('endStatus').style.display = 'none'},2000);
  

}

remSpaceBtn.addEventListener('click', removeSpace);
function removeSpace(){
  let result = input.value.replace(/ /g,"");
  preview.innerText = result
    input.value = result
}

clrBtn.addEventListener('click',clrScreen);
function clrScreen(){
  location.reload()
}


