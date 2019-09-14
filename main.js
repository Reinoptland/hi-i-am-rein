const polaroids = document.getElementsByClassName('polaroid')
const textContainer = document.getElementById('text')
const nextButton = document.getElementById('next')
const prevButton = document.getElementById('prev')
let slideCounter = 0

for (const polaroid of polaroids) {
    polaroid.classList.add('u-display-none')
}

function hidePrevButton(){
    prevButton.style.opacity = 0
}

function displayPrevButton(){
    prevButton.style.opacity = 1
}

function hideNextButton(){
    nextButton.style.opacity = 0
}

function displayNextButton(){
    nextButton.style.opacity = 1
}

function getRandomNumberBetween(min, max) {
    return Math.random() * (max - min) + min;
}

function displayCurrentSlide(){
    polaroids[slideCounter].classList.add('u-display-flex')
    setTimeout(function(){
        polaroids[slideCounter].classList.add('u-visible')
    }, 20)
}

function switchSlide(number){
    const currentSlideNumber = slideCounter
    polaroids[currentSlideNumber].classList.remove('u-visible')
    polaroids[currentSlideNumber].addEventListener('transitionend', function(){
        polaroids[currentSlideNumber].classList.remove('u-display-flex')
        polaroids[currentSlideNumber].classList.add('u-display-none')

        displayCurrentSlide()
    })

    slideCounter = slideCounter + number
    textContainer.innerHTML = slideTextContent[slideCounter]

}

function next(){
    const isOverFlowNumber = slideCounter + 2 > polaroids.length 
    const isLastSlide = slideCounter + 2 === polaroids.length

    if(isOverFlowNumber){
        return 
    }

    if(isLastSlide){
        hideNextButton()
    }

    nextButton.focus()
    displayPrevButton()
    switchSlide(1)
}

function previous(){
    const isUnderFlowNumber = slideCounter -1 < 0
    const isFirstSlide = slideCounter - 1 === 0

    if(isUnderFlowNumber){
        return
    }

    if(isFirstSlide){
        console.log('hello')
        hidePrevButton()
    }

    prevButton.focus()
    displayNextButton()
    switchSlide(-1)
}

function start(){
    polaroids[slideCounter].classList.add('u-display-flex')
    textContainer.innerHTML = slideTextContent[slideCounter]
    displayCurrentSlide()
    hidePrevButton()
    nextButton.addEventListener('click', next)
    prevButton.addEventListener('click', previous)
    window.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowRight':
                return next()
            case 'ArrowLeft':
                return previous()
            default:
                return
        }
    })
}

const slideTextContent = [
    `
        <h1 class="textContainer__text--header">Hi I'm Rein!</h1>
        <p class="textContainer__text--body">
            I am a JavaScript teacher here. Welcome to the Academy. 
            That's me on the right.
            Debugging code with Duc & Maudy, two of my former students 
            (they are pros with jobs now!)
        </p>
    ` ,
    `
        <h1 class="textContainer__text--header">Unwinding</h1>
        <p class="textContainer__text--body">
            When I am not programming I enjoy being outside. 
            Every year I spend 1-2 weeks at a youth camp without electricity to digital detox.
            So refreshing!
        </p>
    ` ,
    `
        <h1 class="textContainer__text--header">Making games</h1>
        <p class="textContainer__text--body">
            My favorite creative outlet is making games for groups of people. 
            I've built games like: War (seen below),
            The Hunger Games, Midnight Zombie Attack, Multiplayer Catan for 110 people & The GoldRush.
        </p>
    ` ,
    `
        <h1 class="textContainer__text--header">How I started</h1>
        <p class="textContainer__text--body">
            I began programming by teaching children how to program at Hackers & Founders in Amsterdam.
            I was studying how to be a primary school teacher at the time. <a target="blank" href="http://scratch.mit.edu">I programmed in Scratch at the time</a>
        </p>
    ` ,
    `
        <h1 class="textContainer__text--header">A taste of Code ...</h1>
        <p class="textContainer__text--body">
            I became curious about "best practice" in programming so I could teach the children in a better way. 
            So I visited a workshop to learn programming for adults - 
            Codaisseur's own: Taste of Code!
        </p>
    ` ,
    `
        <h1 class="textContainer__text--header">The Sensei</h1>
        <p class="textContainer__text--body">
            I wanted to do 8 weeks of progamming at Codaisseur and continue teaching primary school.
            My programming teacher Ben said to me: "After 8 weeks you'll still be bad. Go work for a company afterwards." 
        </p>
    ` ,
    `
        <h1 class="textContainer__text--header">My Academy</h1>
        <p class="textContainer__text--body">
            So I was codaisseur student, just like you! I was in class 4 (aug 1016).
            I learned Ruby on Rails and React.
            My favorite part was doing projects with together with other students.
            <a href="http://hackertees.herokuapp.com/">We made this in week 3</a>
        </p>
    ` ,
    `
        <h1 class="textContainer__text--header">Florin Boys</h1>
        <p class="textContainer__text--body">
            After the Academy I joined the startup FlorinApp. 
            I did Node / Express.
            Both my bosses were 21 years old and were great programmers & courageous people. 
            They taught me to "move fast and break things".
        </p>
    ` ,
    `
        <h1 class="textContainer__text--header">Hosting a Meetup</h1>
        <p class="textContainer__text--body">
            I started to miss teaching people so I began co-hosting the Learning to Code Amsterdam meetup.
            Florin app had run out of money so I did freelance work. (which you shouldn't do with only 1 year experience).
        </p>
    ` ,
    `
        <h1 class="textContainer__text--header">Kabisa</h1>
        <p class="textContainer__text--body">
            I joined a very professional digital agency called Kabisa. Everyone on my team was way better than me. 
            But I knew React! So I got to teach it to some of colleagues as part of my first assignment.
        </p>
    ` ,
    `
        <h1 class="textContainer__text--header">Full circle</h1>
        <p class="textContainer__text--body">
            Enjoyed teaching React my colleagues so much that in 2018 I asked Wouter & Rembert if I could teach at Codaisseur 
            - and they accepted! So now I am going to teach you! See you soon!
        </p>
    ` ,

]

start()
