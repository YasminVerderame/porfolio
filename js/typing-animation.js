const initTypingAnimation = () => {
    const paragraph = document.querySelector('#welcome .header-text p')

    const typingAnimation = (element) => {

        if (element == paragraph) {
            element.innerHTML = 'Front-End Developer'
            const textToArray = element.innerHTML.split('')
            element.innerHTML = ''

            textToArray.forEach((item, index) => {
                setTimeout(() => element.innerHTML += item, 180 * index)
            })
        } 
    }

    typingAnimation(paragraph)
}

initTypingAnimation()