import generateJoke from './generateJoke'
import './styles/main.scss'
import laughing from './assets/image.png'

const laughImg =  document.getElementById('laughImg')
laughImg.scr =  laughing

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()
