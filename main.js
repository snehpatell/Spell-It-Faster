// Spell-it Faset by Sneh P.

// Animations between pages
window.onload = () => {
    const transition_el = document.querySelector('.transition')
    const play = document.getElementById('playGroup')
    const bio = document.getElementById('bioGroup')
    const controls = document.getElementById('controlsGroup')
    const credits = document.getElementById('creditsGroup')

    setTimeout(() => {
        transition_el.classList.remove('is-active')
    }, 500);

    play.addEventListener('click', e => {
        e.preventDefault()
        transition_el.classList.add('is-active')

        setTimeout(() => {
            window.location.href = "C:/Users/snehp/OneDrive/Desktop/Sneh Programs/Spell-it Faster/play.html"
        },500)
    })
    
    bio.addEventListener('click', e => {
        e.preventDefault()
        transition_el.classList.add('is-active')

        setTimeout(() => {
            window.location.href = "C:/Users/snehp/OneDrive/Desktop/Sneh Programs/Spell-it Faster/bio.html"
        },500)
    })

    controls.addEventListener('click', e => {
        e.preventDefault()
        transition_el.classList.add('is-active')

        setTimeout(() => {
            window.location.href = "C:/Users/snehp/OneDrive/Desktop/Sneh Programs/Spell-it Faster/controls.html"
        },500)
    })

    credits.addEventListener('click', e => {
        e.preventDefault()
        transition_el.classList.add('is-active')

        setTimeout(() => {
            window.location.href = "C:/Users/snehp/OneDrive/Desktop/Sneh Programs/Spell-it Faster/credits.html"
        },500)
    })
}