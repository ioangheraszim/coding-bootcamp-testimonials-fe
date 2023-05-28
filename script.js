// Variables

const prevBtn = document.getElementById("prev-button")
const nextBtn = document.getElementById("next-button")

// Array that contains the text and image
const infoArray = [{
        name: "John Tarkpor",
        job: "Junior Front-End Developer",
        text: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
        img: "./images/image-john.jpg"
    }, {
        name: "Tanya Sinclair", 
        job: "UX Engineer",
        text: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
        img: "./images/image-tanya.jpg"
    }
]

// Variable to keep track of the current item
let currentIndex = 0;

// Variable to store the length of the array
const totalItems = infoArray.length;

// Function to animate elements 
function animateElement(elementId, animationClass) {
    const element = document.getElementById(elementId);

    // Remove the class to reset the animation
    element.classList.remove(animationClass); 
    // Delay the addition of the class to allow the reset to take effect
    setTimeout(() => {
    // Add the class to trigger the animation
      element.classList.add(animationClass); 
    }, 10);
}

// Function to update info and animation to be displayed based on the current item in the array
function updateInfo(){
    const item = infoArray[currentIndex];
    document.getElementById('the-name').textContent = item.name;
    document.getElementById('the-job').textContent = item.job;
    document.getElementById('the-text').textContent = item.text;
    document.getElementById('the-image').src = item.img;
    
    animateElement('the-name', 'name'); // Animate the element with ID 'the-name'
    animateElement('the-job', 'profession'); // Animate the element with ID 'the-job'
    animateElement('the-text', 'comment'); // Animate the element with ID 'the-text'
    animateElement('the-image', 'person'); // Animate the element with ID 'the-image'
}


// Previous button functionality
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateInfo();
});


// Next button functionality
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateInfo();
});

