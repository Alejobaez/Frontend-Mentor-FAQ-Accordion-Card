const accordion = document.querySelectorAll('.accordion')

accordion.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('active')
    const panel = element.nextElementSibling
    if (panel.style.height) {
      panel.style.height = null
    } else {
      panel.style.height = panel.scrollHeight + 'px'
    }
  })
})
