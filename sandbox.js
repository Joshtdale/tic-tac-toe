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
    //  = initState.x
    initState.turn = 'o';
    initState.turnCount++
};

function oTurn() {
    //  = initState.o
    initState.turn = 'x'
    initState.turnCount++

}



function checkTurn() {
    if (initState.turn === 'x') {
        console.log('player x turn')
        xTurn()
        
    } else if (initState.turn === 'o') {
        console.log('player o turn')
        oTurn()
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
    createLayout(topRow, 'button', '', 'col btn', 'col1')
    createLayout(topRow, 'button', '', 'col btn', 'col2')
    createLayout(topRow, 'button', '', 'col btn', 'col3')
    createLayout(mainDiv, 'div', '', 'row', 'middleRow')
    createLayout(middleRow, 'button', '', 'col btn', 'col4')
    createLayout(middleRow, 'button', '', 'col btn', 'col5')
    createLayout(middleRow, 'button', '', 'col btn', 'col6')
    createLayout(mainDiv, 'div', '', 'row', 'bottomRow')
    createLayout(bottomRow, 'button', '', 'col btn', 'col7')
    createLayout(bottomRow, 'button', '', 'col btn', 'col8')
    createLayout(bottomRow, 'button', '', 'col btn', 'col9')

}
renderPage()

col1.addEventListener('click', () =>{
    console.log('clicked')
    col1.innerText = `${initState.turn}`
    checkTurn()
    col1.setAttribute('disabled', '')
})

col2.addEventListener('click', () =>{
    console.log('clicked')
    col2.innerText = `${initState.turn}`
        checkTurn()
        col2.setAttribute('disabled', '')

})

col3.addEventListener('click', () =>{
    console.log('clicked')
    col3.innerText = `${initState.turn}`
        checkTurn()
        col3.setAttribute('disabled', '')

})

col4.addEventListener('click', () =>{
    console.log('clicked')
    col4.innerText = `${initState.turn}`
        checkTurn()
        col4.setAttribute('disabled', '')

})

col5.addEventListener('click', () =>{
    console.log('clicked')
    col5.innerText = `${initState.turn}`
        checkTurn()
        col5.setAttribute('disabled', '')

})

col6.addEventListener('click', () =>{
    console.log('clicked')
    col6.innerText = `${initState.turn}`
        checkTurn()
        col6.setAttribute('disabled', '')

})
col7.addEventListener('click', () =>{
    console.log('clicked')
    col7.innerText = `${initState.turn}`
        checkTurn()
        col7.setAttribute('disabled', '')

})

col8.addEventListener('click', () =>{
    console.log('clicked')
    col8.innerText = `${initState.turn}`
        checkTurn()
        col8.setAttribute('disabled', '')

})

col9.addEventListener('click', () =>{
    console.log('clicked')
    col9.innerText = `${initState.turn}`
        checkTurn()
        col9.setAttribute('disabled', '')

})