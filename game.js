const textElement = document.getElementById('text')
const optionButtonsElement= document.getElementById('option-buttons')

let state = {}
let blueChocolate=false;

function startGame() {
    console.log(blueChocolate)

}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === 
        textNodeIndex)
        textElement.innerText = textNode.text
        
        while (optionButtonsElement.firstChild) {
            optionButtonsElement.removeChild(optionButtonsElement.firstChild)
        }
        textNode.options.forEach(option => {
            if (showOption(option)) {
                const button = document.createElement('button')
                button.innerText = option.text
                button.classList.add('btn')
                button.addEventListener('click', () => selectOption(option))
                optionButtonsElement.appendChild(button)

            }
        })
       }
function showOption(option) {
    return true
}

function selectOption(option) {
    const nextTextNoteId = option.nextText
    if(nextTextNoteId <= 0) {
        return startGame()
    }
    
    showTextNode(nextTextNoteId)

}

const textNodes = [
    {
        id: 1,
        text: 'You wake up in a strange place and you see chocolate.',
        options: [
            {
        text:'Take the chocolate',
        
    
        nextText: 2 
    }
   ]
  },
  {
    id:2,
    text: ' As you walk further you stumble upon a fairy. The fairy says give me your chocolate if you want me to grant you a wish...',
    options:[
        
           
        {
            text:'You pick the wish',
            
           
            nextText:3
        },
        {
            text: 'Ignore the fairy',
            nextText: 5
        },
      ]
    },
{
    id:3,
    text: 'After you leave the fairy you stumble upon a leprechaun. Larry the leprochaun shows you his world.You see a beautiful land of gold.As you are about to jump in the pile of gold. You smell something sweet. Is it?',
    
    options: [
        {
            text: "chocolate chip cookies",
            nextText: 4 
        },
        {
            text: "dirty diapers",
            nextText: 6
        }
    ]
},
{
    id:4,
    text:'You are so excited to jump in the pile of gold that you are mesmerized by the fresh smell of chocolate chip cookies that are coming out of the oven, that you realize it was just a dream.',
    options: [
        {
         text: 'Restart',
         nextText: 1
        
        },


    ]
},
{
    id:5,
    text: 'The fairy killed you becuase you ignored her :(',
    
    options: [
        {
            text: "restart",
            nextText: 1
        },
        
    ]
},
{
    id:6,
    text: 'The smell of dirty diapers made you pass away because the smell was too much to handle :(',

    options: [
        {
            text: "restart",
            nextText: 1
        },

]
},
]
