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


const fruit = document.getElementById('fruList')
const img = document.getElementById('img');
     img.style.marginLeft = '36%'; 
     img.style.marginRight = 'auto'

// const newFruit = document.createElement('li')
// const fruitNode = document.createTextNode('New Item')
const image = document.createElement('img');
image.src = 'images/pineapple-removebg-preview.png';
const parentNode = document.getElementById('your-parent-id');
fruit.appendChild(image);

newFruit.append(fruitNode)
fruit.appendChild(newFruit)
newFruit.textContent = 'Pineapple';
let fruitImage = {
    'Pineapple' :''
}

const vegeElement = document.getElementById('vegeHeading')

vegeElement.style.textTransform = 'uppercase';
vegeElement.style.textAlign = 'center'

const vegetables = document.getElementById('vegeImage')
vegetables.style.marginRight = 'auto'
vegetables.style.marginLeft = '36%'

const onion = document.getElementById('onion')
onionImage = document.createElement('img')
onionImage.src = ''
onion.append(onionImage);

const tomato = document.getElementById('tomato')
tomatoImage = document.createElement('img')
tomatoImage.src = 'https://unsplash.com/photos/red-tomatoes-on-brown-wooden-table-eb26eV-ys_k'



