let initState = {
    turn: 'x',
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
    initState.image = './images/skull.png'
    initState.imageSize = '50px'
    initState.turn = 'o';
    initState.turnCount++
    // if (initState.turnCount > 5){
    //     console.log('possible winner')
    //     checkWinner()
    // }
};

function oTurn() {
    //  = initState.o
    initState.image = './images/crossbones.png'
    initState.imageSize = '100px'
    initState.turn = 'x'
    initState.turnCount++
    // if (initState.turnCount > 5){
    //     console.log('possible winner')
    //     // checkWinner()
    // }

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

function createLayout(parentEl, tag, text, className, idName, number) {
    let element = document.createElement(tag)
    element.innerText = text
    if (className) {
        element.setAttribute('class', className)
    };
    if (idName) {
        element.setAttribute('id', idName)
    }
    if (number){
        element.setAttribute('data-number', number)
    }
    parentEl.appendChild(element)
};

function renderPage(){
    createLayout(mainDiv, 'div', '', 'row', 'topRow')
    createLayout(topRow, 'button', '', 'col btn', 'col1', '0')
    createLayout(topRow, 'button', '', 'col btn', 'col2', '1')
    createLayout(topRow, 'button', '', 'col btn', 'col3', '2')
    createLayout(mainDiv, 'div', '', 'row', 'middleRow')
    createLayout(middleRow, 'button', '', 'col btn', 'col4', '3')
    createLayout(middleRow, 'button', '', 'col btn', 'col5', '4')
    createLayout(middleRow, 'button', '', 'col btn', 'col6', '5')
    createLayout(mainDiv, 'div', '', 'row', 'bottomRow')
    createLayout(bottomRow, 'button', '', 'col btn', 'col7', '6')
    createLayout(bottomRow, 'button', '', 'col btn', 'col8', '7')
    createLayout(bottomRow, 'button', '', 'col btn', 'col9', '8')

};
renderPage()


// for (let i = 0; i < winConditionals.length; i++) {
    //     const line = winConditionals[i];
    //     console.log(board[line[0]])
    // }

    function checkWinner (){
        let gameWinner = winConditionals.some((tile) => {
            return (
            board[tile[0]]
            && board[tile[0]] == board[tile[1]]
            && board[tile[1]] == board[tile[2]]
        )
    })
    console.log(board)
    if (gameWinner){
        alert(`${initState.turn}`)
    }
};
    
// checkWinner()

    function gamePlay() {
        let stuff = this.id
        let number = this.getAttribute('data-number')
        // console.log(stuff)
        // console.log(number)
        let col = document.getElementById(`${stuff}`)
    col.style.backgroundImage =`url(${initState.image})`
    col.style.backgroundPosition = 'center'
    col.style.backgroundSize = `${initState.imageSize}`
    col.style.backgroundRepeat = 'no-repeat'
    board[`${number}`] = `${initState.turn}`
    checkTurn()
    checkWinner()
    setTimeout(() => {
        document.getElementById(`${stuff}`).setAttribute('disabled', '')
        }, "1000")
            
    }
    
    col1.addEventListener('click', gamePlay)
    
    col2.addEventListener('click', gamePlay)

    col3.addEventListener('click', gamePlay)

    col4.addEventListener('click', gamePlay)

    col5.addEventListener('click', gamePlay)

    col6.addEventListener('click', gamePlay)

    col7.addEventListener('click', gamePlay)

    col8.addEventListener('click', gamePlay)

    col9.addEventListener('click', gamePlay)

    col1.addEventListener('click', gamePlay)


console.log(board)