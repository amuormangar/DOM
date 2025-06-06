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
element.style.textAlign = 'center'
element.style.textTransform = 'uppercase';

// fruits 
const fruit = document.getElementById('fruList')
const img = document.getElementById('img');
     img.style.marginLeft = '36%'; 
     img.style.marginRight = 'auto'

const newFruit = document.createElement('li')
const fruitNode = document.createTextNode('New Item')
newFruit.append(fruitNode)
fruit.appendChild(newFruit)
newFruit.textContent = 'Pineapple';
newFruit.style.marginLeft = '90%'
newFruit.style.top = '105%'
newFruit.style.position = 'absolute'

const image = document.createElement('img');
image.src = 'images/pineapple-removebg-preview.png';
image.style.border = '1px solid green'
fruit.appendChild(image)
image.style.width = '8vw'
image.style.marginLeft = '40px'
image.style.borderRadius = '20px'


// vegetables
const vegeElement = document.getElementById('vegeHeading')
vegeElement.style.textTransform = 'uppercase';
vegeElement.style.textAlign = 'center'
const vegetables = document.getElementById('vegeImage')
vegetables.style.marginRight = 'auto'
vegetables.style.marginLeft = '36%'

const vegetable = document.getElementById('vegeList')
const newVegetable = document.createElement('ul')
const vegetableNode = document.createTextNode('new vegies')
newVegetable.appendChild('vegetableNode')
vegetableNode.textContent = 'spinach'




