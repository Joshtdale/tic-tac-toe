let initState = {
    turn: 'X',
    winner: '',
    turnCount: 0,
    image: './images/crossbones.png',
    imageSize: '100px',
    x: 'x',
    o: '0'

};
// console.log(initState.turn)
let board = [
    '', '', '',
    '', '', '',
    '', '', '',
];
let winConditionals = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 5, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
// console.log(winConditionals)

function xTurn() {
    //  = initState.x
    initState.image = './images/crossbones.png'
    initState.imageSize = '100px'
    initState.turn = 'O';
    initState.turnCount++
    // if (initState.turnCount > 5){
    //     console.log('possible winner')
    //     checkWinner()
    // }
};

function oTurn() {
    //  = initState.o

    initState.image = './images/skull.png'
    initState.imageSize = '60px'
    initState.turn = 'X'
    initState.turnCount++
    // if (initState.turnCount > 5){
    //     console.log('possible winner')
    //     // checkWinner()
    // }

}



function checkTurn() {
    if (initState.turn === 'X') {
        console.log('player X turn')
        xTurn()

    } else if (initState.turn === 'O') {
        console.log('player O turn')
        oTurn()
    };
};
checkTurn()



function createLayout(parentEl, tag, text, className, idName, number) {
    let element = document.createElement(tag)
    element.innerText = text
    if (className) {
        element.setAttribute('class', className)
    };
    if (idName) {
        element.setAttribute('id', idName)
    }
    if (number) {
        element.setAttribute('data-number', number)
    }
    parentEl.appendChild(element)
};

const mainDiv = document.querySelector('div')
mainDiv.setAttribute('class', 'container text-center')
// const body = document.querySelector('body')

function renderPage() {
    // createLayout(body, 'div', '', 'container text-center', 'mainDiv')
    
    createLayout(mainDiv, 'h1','DEADLY TIC TAC TOE', 'text-secondary', 'headText')
    createLayout(mainDiv, 'h3','X', 'text-secondary', 'turnText')
    createLayout(mainDiv, 'div','','row justify-content-center','boardRow')
    // console.log(initState.turn)
    createLayout(boardRow, 'div', '', 'col-sm-12 col-md-8 col-xl-5', 'boardContainer')

    createLayout(boardContainer, 'div', '', 'row', 'topRow')
    createLayout(topRow, 'button', '', 'col btn', 'col1', '0')
    createLayout(topRow, 'button', '', 'col btn', 'col2', '1')
    createLayout(topRow, 'button', '', 'col btn', 'col3', '2')
    createLayout(boardContainer, 'div', '', 'row', 'middleRow')
    createLayout(middleRow, 'button', '', 'col btn', 'col4', '3')
    createLayout(middleRow, 'button', '', 'col btn', 'col5', '4')
    createLayout(middleRow, 'button', '', 'col btn', 'col6', '5')
    createLayout(boardContainer, 'div', '', 'row', 'bottomRow')
    createLayout(bottomRow, 'button', '', 'col btn', 'col7', '6')
    createLayout(bottomRow, 'button', '', 'col btn', 'col8', '7')
    createLayout(bottomRow, 'button', '', 'col btn', 'col9', '8')

    
    // boardContainer.style.zIndex = '-1'
    
    col1.addEventListener('click', gamePlay)
    
    col2.addEventListener('click', gamePlay)
    
    col3.addEventListener('click', gamePlay)
    
    col4.addEventListener('click', gamePlay)
    
    col5.addEventListener('click', gamePlay)
    
    col6.addEventListener('click', gamePlay)
    
    col7.addEventListener('click', gamePlay)
    
    col8.addEventListener('click', gamePlay)
    
    col9.addEventListener('click', gamePlay)
    
    // for (let i = 0; i < 10; i++) {
        //     // console.log(i)
        //     let col = `col${i}`
        //     col.addEventListener('click', gamePlay)
        
        // }
    };
    renderPage()

    
    
    
    
function checkWinner() {
    let gameWinner = winConditionals.some((tile) => {
        return (
            board[tile[0]]
            && board[tile[0]] == board[tile[1]]
            && board[tile[1]] == board[tile[2]]
        )
    })
    if (gameWinner) {
        setTimeout(() => {
            alert(`${initState.turn} wins`)
            reset()
        }, '300')

    } else if (!gameWinner && initState.turnCount === 9) {
        setTimeout(() => {
            alert('You fools tied')
            reset()
        }, '300')
    }
};

function reset() {
    if (boardRow) {
        mainDiv.removeChild(boardRow)
        mainDiv.removeChild(headText)
        mainDiv.removeChild(turnText)
    }
    initState.turn = 'X',
        initState.winner = '',
        initState.turnCount = 0,
        initState.image = './images/crossbones.png',
        initState.imageSize = '100px',
        initState.x = 'x',
        initState.o = '0'
    board = [
        '', '', '',
        '', '', '',
        '', '', '',
    ];
    // console.log(board)
    renderPage()
    checkTurn()
    
    // gamePlay()
}

function gamePlay() {
    let stuff = this.id
    let number = this.getAttribute('data-number')
    // console.log(stuff)
    // console.log(number)
    let col = document.getElementById(`${stuff}`)
    col.style.backgroundImage = `url(${initState.image})`
    col.style.backgroundPosition = 'center'
    col.style.backgroundSize = `${initState.imageSize}`
    col.style.backgroundRepeat = 'no-repeat'
    board[`${number}`] = `${initState.turn}`
    turnText.innerText = `${initState.turn}`
    checkTurn()
    checkWinner()
    setTimeout(() => {
        document.getElementById(`${stuff}`).setAttribute('disabled', '')
    }, "1000")

}

    col1.removeAttribute('disabled')
    col2.removeAttribute('disabled')
    col3.removeAttribute('disabled')
    col4.removeAttribute('disabled')
    col5.removeAttribute('disabled')
    col6.removeAttribute('disabled')
    col7.removeAttribute('disabled')
    col8.removeAttribute('disabled')
    col9.removeAttribute('disabled')


