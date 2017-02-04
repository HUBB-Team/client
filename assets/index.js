window.STATE = {}
document.getElementById('frame').onclick = () => {
  document.getElementById('video').src = ''
  document.getElementById('frameWrapper').style.display = 'none'
}

const showFrame = (url) => {
  console.log(url)
  document.getElementById('frameWrapper').style.display = 'block'
  document.getElementById('video').src = url
}

const getPersons = () => [
  {
    top: '100px',
    left: '100px',
    camera: 'https://www.youtube.com/embed/_ZXUCQc2Z78'
  }, {
    top: '200px',
    left: '200px',
    camera: 'https://www.youtube.com/embed/rdPR_hOt2ms'
  }, {
    top: '250px',
    left: '400px',
    camera: 'https://www.youtube.com/embed/_ZXUCQc2Z78'
  }, {
    top: '200px',
    left: '600px',
    camera: 'https://www.youtube.com/embed/rdPR_hOt2ms'
  }, {
    top: '300px',
    left: '900px',
    camera: 'https://www.youtube.com/embed/_ZXUCQc2Z78'
  }
]
const main = () => {
  const persons = getPersons()
  persons.forEach((person, i) => {
    document.getElementById(`person${i}`).style.top = person.top
    document.getElementById(`person${i}`).style.left = person.left
    document.getElementById(`person${i}`).onclick = () => {
      showFrame(person.camera)
    }
  })
}

main()
setInterval(main, 1000)
