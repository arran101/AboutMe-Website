// specifying a bunch of the HTML classes to use for my js functions. Note the [0] when getting by class name as it comes out as an array
let navbar = document.getElementsByClassName('navbar')[0]
let startSticky = navbar.offsetTop;


//this function i got off w3schools and it works pretty well. 
//1. make a .sticky in css that has position fixed so it will always stay in the same place when the page is scrolled
//2. link HTML classes to js: also have the startSticky variable that specifies how far offset from the top navbar is 
//3. then make 2 functions- first function runs stickNav function on window scroll (window being the screen window)
//4. stickNav function states that if the windows Y axis point is larger or equal to the navbars, it will add the sticky css
//5. then just add an else function so that it will stop sticking to the top once the above isn't true
window.onscroll = function(){
    stickNav()
};
function stickNav(){
    if (window.pageYOffset >= startSticky){
        navbar.classList.add('sticky')
    } else{
        navbar.classList.remove('sticky');
    }
}

//I put this one down here instead of at the top for easier readability
let hobbyPics = document.getElementsByClassName('hobbyPics')
let morePics = document.getElementsByClassName('picDiv')

window.addEventListener('scroll', function() {
    let y = window.scrollY;

for(let i = 0; i < hobbyPics.length; i++){
    let screenHeight = window.innerHeight;
    let distanceToTopOfScreen = hobbyPics[i].getBoundingClientRect().top;
    if(distanceToTopOfScreen <= screenHeight / 1.1){
        setTimeout(() => {
            hobbyPics[i].classList.remove('inactivePic');
            hobbyPics[i].classList.add('activePic');
            // console.log('added active')
        }, (hobbyPics.length)*50);
    }
    // cant decide if I like it better with it getting removed or just staying
    // else{
    //     setTimeout(() => {
    //         hobbyPics[i].classList.remove('activePic');
    //         hobbyPics[i].classList.add('inactivePic');
    //         // console.log('remove active')
    //     }, (hobbyPics.length)*50);
    // }
}
//this one is for the service box to slide in 
//the for loop sets out the window height and the service boxes
// the if function sets out that when the serviceboxes hit the halfway point on the screen, it removes the inactive class and adds the active class
//the else function does it the opposite way around 
//the bottom 'return' sets out the speed the service boxes come in. the - i makes sure the individual boxes come in, not all of them at once. 
    for(let i = 0; i < morePics.length; i++){
    let screenHeight = window.innerHeight;
    let distanceToTopOfScreen = morePics[i].getBoundingClientRect().top;
    if(distanceToTopOfScreen <= screenHeight / 2){
        setTimeout(() => {
            morePics[i].classList.remove('inactiveStuff');
            morePics[i].classList.add('activeStuff');
        }, (morePics.length -i)*250);
    }
    // else{
    //     setTimeout(() => {
    //         morePics[i].classList.remove('activeStuff');
    //         morePics[i].classList.add('inactiveStuff');
            
    //     }, (morePics.length - i)*250);
    // }
}
});


