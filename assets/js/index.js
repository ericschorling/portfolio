'use strict'



const aboutMeButton = document.getElementById('learnMorePersonal')

aboutMeButton.addEventListener('click', e=>{
    const aboutMeContent = document.getElementById('aboutMe')
    learnMoreButtonAction(aboutMeContent, aboutMeButton)
})

const hashedContentButton = document.getElementById('learnMoreHashed')

hashedContentButton.addEventListener('click', e=>{
    const hashedContent = document.getElementById('hashedDescription')
    learnMoreButtonAction(hashedContent, hashedContentButton)
})

const quizContentButton = document.getElementById('learnMoreQuiz')

quizContentButton.addEventListener('click', e=>{
    const quizContent = document.getElementById('quizDescription')
    learnMoreButtonAction(quizContent, quizContentButton)
})

const seanContentButton = document.getElementById('learnMoreSean')

seanContentButton.addEventListener('click', e=>{
    const quizContent = document.getElementById('seanDescription')
    learnMoreButtonAction(quizContent, quizContentButton)
})

const learnMoreButtonAction = (contentId, buttonId) =>{
    if(contentId.hidden === true){
        //e.preventDefault()
        contentId.hidden = false;
        buttonId.innerHTML = `Learn Less   <span style="font-size: 1rem;" id="learnMoreArrow" class=" far style2 major fa-arrow-alt-circle-up"></span>`


    }
    else {
        contentId.hidden = true;
        buttonId.innerHTML = `Learn More   <span style="font-size: 1rem;" id="learnMoreArrow" class=" far style2 major fa-arrow-alt-circle-down"></span>`
        
    }
}

const emailMe = document.getElementById('emailMe')

emailMe.addEventListener('click', e=>{
    emailMe.href = "mailto:eric.schorling@yahoo.com"
})