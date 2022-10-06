let initState = {
    turn: 'o',
    winner: '',
    turnCount: 0,
    image: './images/skull.png',
    x: 'x',
    o: '0'
    
};
// console.log(initState.turn)
let board = [ , , , , , , , , ];
let winConditionals = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
// console.log(winConditionals)

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
    col1.style.backgroundImage =`url(${initState.image})`
    col1.style.backgroundPosition = 'center'
    col1.style.backgroundSize = '50px'
    col1.style.backgroundRepeat = 'no-repeat'
    // col1.style.backgroundImage = `url(${initState.image})`
    // col1.style.backgroundImage = 'url(./images/skull.png)'
    board[0] = `${initState.turn}`
    checkTurn()
    setTimeout(() => {
        col1.setAttribute('disabled', '')
    }, "1000")

})

col2.addEventListener('click', () =>{
    console.log('clicked')
    col2.innerText = `${initState.turn}`
    board[1] = `${initState.turn}`
    console.log(board[1])
        checkTurn()
        setTimeout(() => {
            col2.setAttribute('disabled', '')
        }, "1000")
})

col3.addEventListener('click', () =>{
    console.log('clicked')
    col3.innerText = `${initState.turn}`
    board[2] = `${initState.turn}`
        checkTurn()
        setTimeout(() => {
            col3.setAttribute('disabled', '')
        }, "1000")
})

col4.addEventListener('click', () =>{
    console.log('clicked')
    col4.innerText = `${initState.turn}`
    board[3] = `${initState.turn}`
        checkTurn()
        setTimeout(() => {
            col4.setAttribute('disabled', '')
        }, "1000")
})

col5.addEventListener('click', () =>{
    console.log('clicked')
    col5.innerText = `${initState.turn}`
    board[4] = `${initState.turn}`
        checkTurn()
        setTimeout(() => {
            col5.setAttribute('disabled', '')
        }, "1000")
})

col6.addEventListener('click', () =>{
    console.log('clicked')
    col6.innerText = `${initState.turn}`
    board[5] = `${initState.turn}`
        checkTurn()
        setTimeout(() => {
            col6.setAttribute('disabled', '')
        }, "1000")
})
col7.addEventListener('click', () =>{
    console.log('clicked')
    col7.innerText = `${initState.turn}`
    board[6] = `${initState.turn}`
        checkTurn()
        setTimeout(() => {
            col7.setAttribute('disabled', '')
        }, "1000")
})

col8.addEventListener('click', () =>{
    console.log('clicked')
    col8.innerText = `${initState.turn}`
    board[7] = `${initState.turn}`
        checkTurn()
        setTimeout(() => {
            col8.setAttribute('disabled', '')
        }, "1000")
})

col9.addEventListener('click', () =>{
    console.log('clicked')
    col9.innerText = `${initState.turn}`
    board[8] = `${initState.turn}`
        checkTurn()
        setTimeout(() => {
            col9.setAttribute('disabled', '')
        }, "1000")
})

// createLayout(mainDiv, 'img', '', '', 'img')
// img.setAttribute('src', './images/skull.png')