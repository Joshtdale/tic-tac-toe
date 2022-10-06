let initState = {
    turn: 'o',
    winner: '',
    turnCount: 0,
    image: './images/crossbones.png',
    imageSize: '100px',
    x: 'x',
    o: '0'
    
};
// console.log(initState.turn)
let board = [
    '','','',
    '','','',
    '','','',
];
let winConditionals = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,5,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
// console.log(winConditionals)

function xTurn() {
    //  = initState.x
    initState.turn = 'o';
    initState.image = './images/skull.png'
    initState.imageSize = '50px'
    initState.turnCount++
    if (initState.turnCount > 5){
        console.log('possible winner')
    }
};

function oTurn() {
    //  = initState.o
    initState.turn = 'x'
    initState.image = './images/crossbones.png'
    initState.imageSize = '100px'
    initState.turnCount++
    if (initState.turnCount > 5){
        console.log('possible winner')
    }

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
};

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

};
renderPage()

function gamePlay(e) {
    // let target = e.target;
    // let id = target.id
    let id = this.id
    console.log(id)
    id.style.backgroundImage =`url(${initState.image})`
    id.style.backgroundPosition = 'center'
    id.style.backgroundSize = `${initState.imageSize}`
    id.style.backgroundRepeat = 'no-repeat'
    board[0] = `${initState.turn}`
    checkTurn()
    // setTimeout(() => {
    //     id.setAttribute('disabled', '')
    //     }, "1000")

}

col1.addEventListener('click', (e) =>{
    console.log('clicked')
    // col1.innerText = `${initState.turn}`
    gamePlay()
})

col2.addEventListener('click', () =>{
    console.log('clicked')
    // col2.innerText = `${initState.turn}`
    col2.style.backgroundImage =`url(${initState.image})`
    col2.style.backgroundPosition = 'center'
    col2.style.backgroundSize = `${initState.imageSize}`
    col2.style.backgroundRepeat = 'no-repeat'
    board[1] = `${initState.turn}`
        checkTurn()
        setTimeout(() => {
            col2.setAttribute('disabled', '')
        }, "1000")
})

col3.addEventListener('click', () =>{
    console.log('clicked')
    // col3.innerText = `${initState.turn}`
    col3.style.backgroundImage =`url(${initState.image})`
    col3.style.backgroundPosition = 'center'
    col3.style.backgroundSize = `${initState.imageSize}`
    col3.style.backgroundRepeat = 'no-repeat'
    board[2] = `${initState.turn}`
        checkTurn()
        setTimeout(() => {
            col3.setAttribute('disabled', '')
        }, "1000")
})

col4.addEventListener('click', () =>{
    console.log('clicked')
    // col4.innerText = `${initState.turn}`
    col4.style.backgroundImage =`url(${initState.image})`
    col4.style.backgroundPosition = 'center'
    col4.style.backgroundSize = `${initState.imageSize}`
    col4.style.backgroundRepeat = 'no-repeat'
    board[3] = `${initState.turn}`
        checkTurn()
        setTimeout(() => {
            col4.setAttribute('disabled', '')
        }, "1000")
})

col5.addEventListener('click', () =>{
    console.log('clicked')
    // col5.innerText = `${initState.turn}`
    col5.style.backgroundImage =`url(${initState.image})`
    col5.style.backgroundPosition = 'center'
    col5.style.backgroundSize = `${initState.imageSize}`
    col5.style.backgroundRepeat = 'no-repeat'
    board[4] = `${initState.turn}`
        checkTurn()
        setTimeout(() => {
            col5.setAttribute('disabled', '')
        }, "1000")
})

col6.addEventListener('click', () =>{
    console.log('clicked')
    // col6.innerText = `${initState.turn}`
    col6.style.backgroundImage =`url(${initState.image})`
    col6.style.backgroundPosition = 'center'
    col6.style.backgroundSize = `${initState.imageSize}`
    col6.style.backgroundRepeat = 'no-repeat'
    board[5] = `${initState.turn}`
        checkTurn()
        setTimeout(() => {
            col6.setAttribute('disabled', '')
        }, "1000")
})

col7.addEventListener('click', () =>{
    console.log('clicked')
    // col7.innerText = `${initState.turn}`
    col7.style.backgroundImage =`url(${initState.image})`
    col7.style.backgroundPosition = 'center'
    col7.style.backgroundSize = `${initState.imageSize}`
    col7.style.backgroundRepeat = 'no-repeat'
    board[6] = `${initState.turn}`
        checkTurn()
        setTimeout(() => {
            col7.setAttribute('disabled', '')
        }, "1000")
})

col8.addEventListener('click', () =>{
    console.log('clicked')
    // col8.innerText = `${initState.turn}`
    col8.style.backgroundImage =`url(${initState.image})`
    col8.style.backgroundPosition = 'center'
    col8.style.backgroundSize = `${initState.imageSize}`
    col8.style.backgroundRepeat = 'no-repeat'
    board[7] = `${initState.turn}`
        checkTurn()
        setTimeout(() => {
            col8.setAttribute('disabled', '')
        }, "1000")
})

col9.addEventListener('click', () =>{
    console.log('clicked')
    // col9.innerText = `${initState.turn}`
    col9.style.backgroundImage =`url(${initState.image})`
    col9.style.backgroundPosition = 'center'
    col9.style.backgroundSize = `${initState.imageSize}`
    col9.style.backgroundRepeat = 'no-repeat'
    board[8] = `${initState.turn}`
        checkTurn()
        setTimeout(() => {
            col9.setAttribute('disabled', '')
        }, "1000")
})

console.log(board)