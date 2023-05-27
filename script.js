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

let currentIndex = 0;
const totalItems = infoArray.length;

function animateElement(elementId, animationClass) {
    const element = document.getElementById(elementId);
    element.classList.remove(animationClass); // Remove the class to reset the animation
    // Delay the addition of the class to allow the reset to take effect
    setTimeout(() => {
      element.classList.add(animationClass); // Add the class to trigger the animation
    }, 10);
}

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

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateInfo();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateInfo();
});

