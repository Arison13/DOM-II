// Your code goes here
const logoHeading = document.querySelector('.logo-heading');
const home = document.querySelector('.home');
const blog = document.querySelector('.blog');
const contact = document.querySelector('.contact');
const aboutButton = document.querySelector('nav a:nth-of-type(3)');
const intro = document.querySelector('.intro');
const welcome = document.querySelector('h2');
const introImg = document.querySelector('.intro img');
const introP = document.querySelector('.intro p');

//Logo
function logo(event){
    console.log('THIS CAN WORK!!');
    logoHeading.style.color = 'red';
    logoHeading.innerHTML = 'HAVE A FUN TIME!';
}

logoHeading.addEventListener('mouseover', logo);

//Home
home.addEventListener('click', function(event){
    console.log("This is all working!!");
})
//About
aboutButton.addEventListener('click', function(event){
    console.log("about button works");
    
})

//intro Image click
function MainImg(event){
    introImg.classList.add = 'hidden';
    console.log("Its alive");
}

introImg.addEventListener('click', MainImg);

//Welcome mouseover. Needs to improve
function displayHome(){
    event.stopPropagation();
    welcome.innerHTML = 'I Code for Fun (well sometimes:)!';
    welcome.style.color = 'red';
}

welcome.addEventListener('mouseover', function(event){
   console.log(event);
   if (event.type === 'mouseover'){
       displayHome();
   }else {
       displayHome = null;
   }
})

function changeP(){
    introP.innerHTML = 'Just trying things'
    introP.style.color = 'yellow';
    introP.style.background = 'gray';
}
introP.addEventListener('click', changeP);

//BIG NOTE: CAN'T USE ADDEVENTLISTNER ON ARRAYS(NODES LIST) HAVE TO TARGET EACH ONE, USE A FOREACH LOOP IE: forEach(element => element.addEventListener('mouseover', CALLBACK));