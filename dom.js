const background = document.querySelector('body')
background.style.backgroundColor = 'silver'

const h1Element = document.getElementById('title')
h1Element.style.color = 'green'
h1Element.style.textAlign = 'center'
h1Element.style.fontSize = '90px'

const stockParagraph = document.getElementById('stock')
stockParagraph.style.textAlign = 'center'
stockParagraph.style.fontSize = '50px'

const element = document.getElementById('heading')
element.style.justifyContent = 'center'
element.style.textTransform = 'uppercase';

const vegeElement = document.getElementById('vegeHeading')

vegeElement.style.textTransform = 'uppercase';


const fruit = document.getElementById('fruList')
const img = document.getElementById("img");

img.style.margin = 'auto'

const newFruit = document.createElement('li')
const fruitNode = document.createTextNode('New Item')
newFruit.append(fruitNode)
fruit.appendChild(newFruit)
newFruit.textContent = 'Pineapple';

