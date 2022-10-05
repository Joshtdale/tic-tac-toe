let initState = {
    turn: 'x',
    winner: '',
    turnCount: 0,
    x: 'x',
    o: '0'
    
};
// console.log(initState.turn)
let board = [ , , , , , , , , ];
let winConditionals = []

function xTurn() {
    Element.innerText = initState.x
    initState.turn = 'o';
    initState.turnCount++
};

function oTurn() {
    Element.innerText = initState.o
    initState.turn = 'x'
    initState.turnCount++

}

xTurn()
oTurn()
xTurn()

function checkTurn() {
    if (initState.turn === 'x') {
        console.log('player x turn')
        // xTurn()
        
    } else if (initState.turn === 'o') {
        console.log('player o turn')
        // oTurn()
    };
};
checkTurn()
const mainDiv = document.getElementById('mainDiv')
mainDiv.setAttribute('class', 'container text-center')

function createLayout(parentEl, tag, text, className, idName,) {
    let element = document.createElement(tag)
    element.innerText = text
    if (className) {
        element.setAttribute('class', className)
    };
    if (idName) {
        element.setAttribute('id', idName)
    }
    parentEl.appendChild(element)
}

function renderPage(){
    createLayout(mainDiv, 'div', '', 'row', 'topRow')
    createLayout(topRow, 'div', 'x', 'col', 'col1')
    createLayout(topRow, 'div', 'x', 'col', 'col2')
    createLayout(topRow, 'div', 'x', 'col', 'col3')
    createLayout(mainDiv, 'div', '', 'row', 'middleRow')
    createLayout(middleRow, 'div', 'x', 'col', 'col4')
    createLayout(middleRow, 'div', 'x', 'col', 'col5')
    createLayout(middleRow, 'div', 'x', 'col', 'col6')
    createLayout(mainDiv, 'div', '', 'row', 'bottomRow')
    createLayout(bottomRow, 'div', 'x', 'col', 'col7')
    createLayout(bottomRow, 'div', 'x', 'col', 'col8')
    createLayout(bottomRow, 'div', 'x', 'col', 'col9')

}
renderPage()

col1.addEventListener('click', () =>{
    console.log('clicked')
})
col2.addEventListener('click', () =>{
    console.log('clicked')
})
col3.addEventListener('click', () =>{
    console.log('clicked')
})
col4.addEventListener('click', () =>{
    console.log('clicked')
})
col5.addEventListener('click', () =>{
    console.log('clicked')
})
col6.addEventListener('click', () =>{
    console.log('clicked')
})
col7.addEventListener('click', () =>{
    console.log('clicked')
})
col8.addEventListener('click', () =>{
    console.log('clicked')
})
col9.addEventListener('click', () =>{
    console.log('clicked')
})