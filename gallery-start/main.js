const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['./images/pic1.jpg','./images/pic2.jpg','./images/pic3.jpg','./images/pic4.jpg','./images/pic5.jpg']

/* Declaring the alternative text for each image file */

/* Looping through images */
for (image of images){
const newImage = document.createElement('img');
newImage.addEventListener('click',(e) => {
const source = e.target.src;
displayedImage.src = source;
})
newImage.setAttribute('src', image);
newImage.setAttribute('alt', image.slice(9));
thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () =>{
    const myClass = btn.getAttribute('class');
    if (myClass == "dark"){
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)"
    }
    else {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})