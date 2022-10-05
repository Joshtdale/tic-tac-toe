let initState = {
    turn: 'x',
    winner: '',
    turnCount: 0,
    x: 'x',
    o: '0'
    
};
// console.log(initState.turn)
let board = [ , , , , , , , , ];

function xTurn() {
    initState.turn = 'o';
    initState.turnCount++
};

function oTurn() {
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
