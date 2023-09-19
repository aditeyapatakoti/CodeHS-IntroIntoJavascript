var SCREEN_HEIGHT = 400;
var SCREEN_WIDTH = 400;

var ROWS = 8;
var COLS = 8;

var PIECE_PADDING = 2;
var OUTLINE_WIDTH = PIECE_PADDING * 2;

setSize(SCREEN_HEIGHT, SCREEN_WIDTH);

var segment_width = getWidth() / COLS;
var segment_height = getHeight() / ROWS;

var ALTERNATE_COLOR = new Color(91, 70, 70);
var OUTLINE_COLOR = Color.yellow;

var board = new Grid(ROWS, COLS);


var whiteKing = 0;
var whiteQueen = 2;
var whiteRook = 4;
var whiteBishop = 6;
var whiteKnight = 8;
var whitePawn = 10;

var blackKing = 1;
var blackQueen = 3;
var blackRook = 5;
var blackBishop = 7;
var blackKnight = 9;
var blackPawn = 11;

var turnWhite = true;

var clicked = false;
var clickRow = -1;
var clickCol = -1;
var outline = undefined;

var whiteCheckmate = false;
var blackCheckmate = false;

var lost = false;
var text = undefined;

var clicksAfterLost = 0;

var blackAI = true;
var whiteAI = false;
var AI_delay = 1000;

var debugMessages = true;
var showMinimaxDebug = false;

var clicks = 0;

var fromWhite;

function start() {
    lost = false;
    turnWhite = true;
    clicked = false;
    clickRow = -1;
    clickCol = -1;
    outline = undefined;
    whiteCheckmate = false;
    blackCheckmate = false;
    lost = false;
    text = undefined;
    clicksAfterLost = 0;
    board = new Grid(ROWS, COLS);
    board.initFromArray([
        [blackRook, blackKnight, blackBishop, blackQueen, blackKing, blackBishop, blackKnight, blackRook],
        [blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn],
        // [blackKing, -1, -1, -1, -1, blackKnight, -1, blackRook],
        // [-1, blackQueen, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1],
        // [-1, -1, -1, -1, -1, -1, -1, -1],
        // [whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn],
        // [whiteKing, -1, -1, -1, -1, whitePawn, -1, whiteRook]
        [whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn],
        [whiteRook, whiteKnight, whiteBishop, whiteQueen, whiteKing, whiteBishop, whiteKnight, whiteRook]
    ]);
    createBoard();
    setupPieces();
    mouseClickMethod(click);
    refresh();
    
    if (whiteAI) {
        setTimer(doWhiteMove, 1000);
    }
}

function click(e) {
    if (lost) {
        clicksAfterLost++;
        if (clicksAfterLost >= 3) {
            start();
        }
        return;
    }
    var col = Math.floor(e.getX() / segment_width);
    var row = Math.floor(e.getY() / segment_height);
    
    doClick(row, col);
    clicks++;
    // if (clicks > 14) {
    //     showMinimaxDebug = true;
    // }
    // if (clicks > 16) {
    //     blackAI = false;
    // }
}

function doClick(row, col) {
    if (whiteAI && blackAI) {
        stopTimer(doBlackMove);
        stopTimer(doWhiteMove);
    }
    
    var piece = board.get(row, col);
    
    var white = undefined;
    
    if (piece % 2 == 1) {
        white = false;
    }
    else if (piece % 2 == 0) {
        white = true;
    }
    
    var fromPiece = -1;
    fromWhite = white;
    if (clickRow != -1 && clickCol != -1) {
        fromPiece = board.get(clickRow, clickCol);

        if (fromPiece % 2 == 1) {
            fromWhite = false;
        }
        else if (fromPiece % 2 == 0) {
            fromWhite = true;
        }
    }
    if ((turnWhite && !fromWhite) || (!turnWhite && fromWhite)) {
        return;
    }
    
    var validMove = false;
    if ((clickRow != -1 && clickCol != -1) && (clickRow != row || clickCol != col)) {
        validMove = isValidMove(clickRow, clickCol, row, col);
        
        // Check if puts in checkmate
        var boardCopy = copyGrid(board);
        makeMove(clickRow, clickCol, row, col);
        if (validMove && checkForCheckmate(!fromWhite)) { // If checkmate after turn, invalid
            validMove = false;
        }
        board = copyGrid(boardCopy);

        printOut("Valid: " + validMove);
    }
    
    var didAnim = false;
    
    if (clicked) {
        if (validMove) {
            var moveFromRow = clickRow;
            var moveFromCol = clickCol;
            clickRow = -1;
            clickCol = -1;
            turnWhite = !turnWhite;

            clicked = false;
            remove(outline);
            outline = undefined;
            
            didAnim = true;
            
            setTimer(finishTurn, animLength);
            animMakeMove(moveFromRow, moveFromCol, row, col);
        }
        else {
            clicked = false;
            remove(outline);
            outline = undefined;
            
            clickRow = -1;
            clickCol = -1;
        }
    }
    else  {
        if (pieceAtTile(row, col)) {
            clicked = true;
            clickRow = row;
            clickCol = col;
            outline = outlineSquare(row, col);
        }
    }
    
    if (!didAnim) {
        println("Calling instantly");
        finishTurn();
    }
}

function finishTurn() {
    println("Finish turn called");
    stopTimer(finishTurn);
    checkmateChecks(fromWhite);
    
    // Check for pawns to turn to queens
    checkForPawnsAtEndOfBoard();
    refresh();

    printOut("Board Value: " + evaluateBoard());
    
    if (blackAI) {
        refresh();
        doBlackMove();
        checkmateChecks(!fromWhite);
        
        // Check for pawns to turn to queens
        checkForPawnsAtEndOfBoard();
        
        refresh();
        printOut("Board Value: " + evaluateBoard());
    }
}

function doBlackMove() {
    stopTimer(doBlackMove);
            
    if (!turnWhite && blackAI) {
        printOut("Black move");
        // Black turn
        var move = getMove(false);
        try {
            var fromRow = move["fromRow"];
        }
        catch(e) {
            println("Error no move, " + move);
        }
        if (fromRow == undefined) {
            println("Error, no move " + move);
        }
        checkmateChecks(false);
        if (lost) {
            return;
        }
        try {
            var fromCol = move["fromCol"];
        }
        catch {
            println("You win?")
        }
        var toRow = move["toRow"];
        var toCol = move["toCol"];
        printOut("Black making move: " + fromRow + "," + fromCol + " to " + toRow + "," + toCol);
        animMakeMove(fromRow, fromCol, toRow, toCol); // Disable AI
        turnWhite = !turnWhite; // Disable AI
    }
    
    checkForPawnsAtEndOfBoard();
    refresh();
    
    if (whiteAI) {
        setTimer(doWhiteMove, AI_delay);
    }
}

function doWhiteMove() {
    stopTimer(doWhiteMove);
    
    if (turnWhite && whiteAI) {
        printOut("White move");
        // White turn
        var move = getMove(true);
        try {
            var fromRow = move["fromRow"];
        }
        catch(e) {
            println("Error, " + move);
        }
        checkmateChecks(true);
        if (lost) {
            return;
        }
        var fromCol = move["fromCol"];
        var toRow = move["toRow"];
        var toCol = move["toCol"];
        makeMove(fromRow, fromCol, toRow, toCol); // Disable AI
        turnWhite = !turnWhite; // Disable AI
        printOut("Moving from " + fromRow + "," + fromCol + " to " + toRow + "," + toCol);
    }
    
    // Check for pawns to turn to queens
    checkForPawnsAtEndOfBoard();
    
    refresh();
    
    if (blackAI) {
        setTimer(doBlackMove, AI_delay);
    }
    printOut("Board Value: " + evaluateBoard());
}

function checkmateChecks(fromWhite) {
    var checkmate = checkForCheckmate(fromWhite);
    if (fromWhite) {
        whiteCheckmate = checkmate;
    }
    else {
        blackCheckmate = checkmate;
    }
    if (checkmate) { // If in checkmate before
        keepsInCheck(fromWhite);
    }
}

function getPossibleMoves(isWhite) {
    var moves = [];
    for (var row = 0; row < board.numRows(); row++) {
        for (var col = 0; col < board.numCols(); col++) {
            var piece = getPieceAtTile(row, col);
            if (pieceIsWhite(piece) == isWhite && piece != -1) {
                var pieceMoves = getListOfPossibleMoves(row, col, isWhite);
                for (var i = 0; i < pieceMoves.length; i++) {
                    moves.push(pieceMoves[i]);
                }
            }
        }
    }
    return moves;
}

function getMove(isWhite) {
    var moves = getPossibleMoves(isWhite);
    printOut("Found " + moves.length + " possible moves")
    if (moves.length > 0) {
        // return calculateBestMove(moves, isWhite)
        positions = 0;
        var move = bestMinimaxMove(3, isWhite, -10000, 10000, false);
        println("Searched " + positions + " positions")
        if (showMinimaxDebug) {
            println("Making move: " + printMove(move))
            println("Positions calculated: " + positions)
        }
        return move;
    }
    else {
        printOut("No moves left")
    }
}

function printMove(move) {
    var fromRow = move["fromRow"];
    var fromCol = move["fromCol"];
    var toRow = move["toRow"];
    var toCol = move["toCol"];
    return "" + fromRow + "," + fromCol + " to " + toRow + "," + toCol;
}

var positions = 0;

function bestMinimaxMove(depth, maximizingPlayer, alpha, beta, shouldReturnValue) {
    positions++;
    if (depth == 0) {
        return evaluateBoard()
    }
    
    var moves = getPossibleMoves(maximizingPlayer);
    var bestMoveValue = 9999 * (maximizingPlayer ? -1 : 1);
    var bestMoveData = null;
    
    
    
    for (var i = 0; i < moves.length; i++) {
        var move = moves[i];

        var boardCopy = copyGrid(board);
        makeMove(move["fromRow"], move["fromCol"], move["toRow"], move["toCol"]);
        var value = bestMinimaxMove(depth - 1, !maximizingPlayer, alpha, beta, true);
        board = copyGrid(boardCopy);

        if (showMinimaxDebug) {
            if (maximizingPlayer) {
                printOut("Maximizing player && " + value + " > " + bestMoveValue + ": " + (value > bestMoveValue))
            }
            else {
                printOut("Not maximizing player && " + value + " < " + bestMoveValue + ": " + (value < bestMoveValue))
            }
        }
        
        if((maximizingPlayer && value > bestMoveValue) || (!maximizingPlayer && value < bestMoveValue)) {
            bestMoveValue = value;
            bestMoveData = move;
        }
    }
    
    if (shouldReturnValue) {
        // printOut("Found best move: " + printMove(bestMoveData) + " for " + bestMoveValue);
        return bestMoveValue;
    }
    else {
        printOut("Found final move: " + printMove(bestMoveData) + " for " + bestMoveValue);
        return bestMoveData;
    }
}

// Maximizing player && 80 > 120: false
// Found best move: 7,7 to 7,5 for 120
// Not maximizing player && 120 < 90: false
// Making move: 1,0 to 0,0


// whiteKing = 0;
// whiteQueen = 2;
// whiteRook = 4;
// whiteBishop = 6;
// whiteKnight = 8;
// whitePawn = 10;

// blackKing = 1;
// blackQueen = 3;
// blackRook = 5;
// blackBishop = 7;
// blackKnight = 9;
// blackPawn = 11;

function evaluateBoard () {
    var totalEvaluation = 0;
    for (var row = 0; row < board.numRows(); row++) {
        for (var col = 0; col < board.numCols(); col++) {
            totalEvaluation += getPieceValue(row, col);
        }
    }
    return totalEvaluation;
};

function reverseArray(array) {
    return array.slice().reverse();
};

var pawnEvalWhite =
    [
        [25.0,  25.0,  25.0,  25.0,  25.0,  25.0,  25.0,  25.0],
        [5.0,  5.0,  5.0,  5.0,  5.0,  5.0,  5.0,  5.0],
        [1.0,  1.0,  2.0,  3.0,  3.0,  2.0,  1.0,  1.0],
        [0.5,  0.5,  1.0,  2.5,  2.5,  1.0,  0.5,  0.5],
        [0.0,  0.0,  0.0,  2.0,  2.0,  0.0,  0.0,  0.0],
        [0.5, -0.5, -1.0,  0.0,  0.0, -1.0, -0.5,  0.5],
        [0.5,  1.0, 1.0,  -2.0, -2.0,  1.0,  1.0,  0.5],
        [0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0]
    ];

var pawnEvalBlack = reverseArray(pawnEvalWhite);

var knightEval =
    [
        [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0],
        [-4.0, -2.0,  0.0,  0.0,  0.0,  0.0, -2.0, -4.0],
        [-3.0,  0.0,  1.0,  1.5,  1.5,  1.0,  0.0, -3.0],
        [-3.0,  0.5,  1.5,  2.0,  2.0,  1.5,  0.5, -3.0],
        [-3.0,  0.0,  1.5,  2.0,  2.0,  1.5,  0.0, -3.0],
        [-3.0,  0.5,  1.0,  1.5,  1.5,  1.0,  0.5, -3.0],
        [-4.0, -2.0,  0.0,  0.5,  0.5,  0.0, -2.0, -4.0],
        [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0]
    ];

var bishopEvalWhite = [
    [ -2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
    [ -1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -1.0],
    [ -1.0,  0.0,  0.5,  1.0,  1.0,  0.5,  0.0, -1.0],
    [ -1.0,  0.5,  0.5,  1.0,  1.0,  0.5,  0.5, -1.0],
    [ -1.0,  0.0,  1.0,  1.0,  1.0,  1.0,  0.0, -1.0],
    [ -1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0, -1.0],
    [ -1.0,  0.5,  0.0,  0.0,  0.0,  0.0,  0.5, -1.0],
    [ -2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0]
];

var bishopEvalBlack = reverseArray(bishopEvalWhite);

var rookEvalWhite = [
    [  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0],
    [  0.5,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [  0.0,   0.0, 0.0,  0.5,  0.5,  0.0,  0.0,  0.0]
];

var rookEvalBlack = reverseArray(rookEvalWhite);

var evalQueen =
    [
    [ -2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0],
    [ -1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -1.0],
    [ -1.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -1.0],
    [ -0.5,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -0.5],
    [  0.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -0.5],
    [ -1.0,  0.5,  0.5,  0.5,  0.5,  0.5,  0.0, -1.0],
    [ -1.0,  0.0,  0.5,  0.0,  0.0,  0.0,  0.0, -1.0],
    [ -2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0]
];

var kingEvalWhite = [

    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -2.0, -3.0, -3.0, -4.0, -4.0, -3.0, -3.0, -2.0],
    [ -1.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -1.0],
    [  2.0,  2.0,  0.0,  0.0,  0.0,  0.0,  2.0,  2.0 ],
    [  2.0,  3.0,  1.0,  0.0,  0.0,  1.0,  3.0,  2.0 ]
];

var kingEvalBlack = reverseArray(kingEvalWhite);

function getPieceValue(row, col) {
    var piece = board.get(row, col);
    
    if (piece == -1) {
        return 0;
    }
    
    var black = false;
    if (!pieceIsWhite(piece)) {
        piece--;
        black = true;
    }
    
    var value = 0;
    
    switch(piece) {
        case 0:
            value = 900 + kingEvalWhite[row][col];
            break;
        case 1:
            value = 900 + kingEvalBlack[row][col];
            break;
        case 2:
            value = 90 + evalQueen[row][col];
            break;
        case 4:
            value = 50 + rookEvalWhite[row][col];
            break;
        case 5:
            value = 50 + rookEvalBlack[row][col];
            break;
        case 6:
            value = 30 + bishopEvalWhite[row][col];
            break;
        case 7:
            value = 30 + bishopEvalBlack[row][col];
            break;
        case 8:
            value = 30 + knightEval[row][col];
            break;
        case 10:
            value = 10 + pawnEvalWhite[row][col];
            break;
        case 11:
            value = 10 + pawnEvalBlack[row][col];
            break;
    }
    
    if (black) {
        value = -value;
    }
    return value;
}

function getListOfPossibleMoves(pieceRow, pieceCol, isWhite) {
    var moves = [];
    for (var col = 0; col < board.numCols(); col++) {
        for (var row = 0; row < board.numRows(); row++) {
            var valid = isValidMove(pieceRow, pieceCol, row, col)
            var boardCopy = copyGrid(board);
            makeMove(pieceRow, pieceCol, row, col);
            if (valid && !checkForCheckmate(!isWhite)) {
                moves.push({
                    "fromRow": pieceRow,
                    "fromCol": pieceCol,
                    "toRow": row,
                    "toCol": col
                })
            }
            board = copyGrid(boardCopy);
        }
    }
    return moves;
}

function keepsInCheck(fromWhite) {
    var boardCopy = copyGrid(board);
    var foundBreakingMove = false;
    for (var row1 = 0; row1 < board.numRows(); row1++) {
        for (var col1 = 0; col1 < board.numCols(); col1++) {
            var piece1 = getPieceAtTile(row1, col1)
            if (pieceIsWhite(piece1) != fromWhite && piece1 != -1) {
                for (var row2 = 0; row2 < board.numRows(); row2++) {
                    for (var col2 = 0; col2 < board.numCols(); col2++) {
                        var piece2 = getPieceAtTile(row2, col2);
                        
                        if (isValidMove(row1, col1, row2, col2)) {
                            makeMove(row1, col1, row2, col2);
                            if (!checkForCheckmate(fromWhite)) { // If isn't checkmate, found breaking move
                                foundBreakingMove = true;
                                // println("BREAKING MOVE! From " + row1 + "," + col1 + " to " + row2 + "," + col2);
                            }
                            board = copyGrid(boardCopy);
                        }
                    }
                }
            }
        }
    }
    
    if (!foundBreakingMove) {
        println("No breaking move found, game over!");
        if (!fromWhite) {
            showText("Checkmate, Black Wins!")
        }
        else {
            showText("Checkmate, White Wins!")
        }
        lost = true;
    }
    else {
        println("Breaking move found, keep trying.");
    }
    
    board = copyGrid(boardCopy);
}

function checkForPawnsAtEndOfBoard() {
    for (var checkRow = 0; checkRow < board.numRows(); checkRow++) {
        for (var checkCol = 0; checkCol < board.numCols(); checkCol++) {
            var piece = getPieceAtTile(checkRow, checkCol)
            var isWhite = true;
            if (piece % 2 == 1) {
                isWhite = false;
            }
            else if (piece % 2 == 0) {
                isWhite = true;
            }
            if (!isWhite) {
                piece -= 1;
            }
            if (piece == 10) {
                if ((isWhite && checkRow == 0) || (!isWhite && checkRow == ROWS - 1)) {
                    var queen = 2;
                    if (!isWhite) {
                        queen +=1;
                    }
                    board.set(checkRow, checkCol, queen)
                }
            }
        }
    }
}

function showText(message) {
    printOut("Show text: " + message);
    text = new Text(message);
    text.setColor(Color.red);
    text.setPosition((getWidth() / 2) - (text.getWidth() / 2), (getHeight() / 2) + (text.getHeight() / 2))
    add(text);
}

function copyGrid(copyFrom) {
    var newGrid = new Grid(copyFrom.numRows(), copyFrom.numCols());
    for (var row = 0; row < copyFrom.numRows(); row++) {
        for (var col = 0; col < copyFrom.numCols(); col++) {
            newGrid.set(row, col, copyFrom.get(row, col));
        }
    }
    return newGrid;
}

function checkForCheckmate(fromWhite) {
    var checkmate = false;
    for (var c = 0; c < board.numCols(); c++) {
        for (var r = 0; r < board.numRows(); r++) {
            var piece = getPieceAtTile(r, c);
            if (pieceIsWhite(piece) == fromWhite && piece != -1) {
                var king = getKing(!fromWhite);
                var canMoveToKing = isValidMove(r, c, king[0], king[1]);
                if (canMoveToKing) {
                    checkmate = true;
                }
            }
        }
    }
    return checkmate;
}

function getKing(whiteKing) {
    for (var c = 0; c < board.numCols(); c++) {
        for (var r = 0; r < board.numRows(); r++) {
            var piece = getPieceAtTile(r, c);
            if (whiteKing && piece == 0) { 

                return [r, c];
            }
            else if (!whiteKing && piece == 1) {
                return [r, c];
            }
        }
    }
    println("Couldn't find king for " + whiteKing + " | " + board.numRows() + ", " + board.numCols())
    printBoard();
    return undefined;
}

function printBoard() {
    for (var r = 0; r < board.numRows(); r++) {
        for (var c = 0; c < board.numCols(); c++) {
            var piece = getPieceAtTile(r, c);
            print(piece + " ")
        }
        println("")
    }
}

function refresh() {
    removeAll();
    createBoard();
    if (outline) {
        add(outline);
    }
    setupPieces();
    if (text != undefined) {
        printOut("Showing text")
        add(text); 
    }
}

var animPiece = null;

var animFromRow = -1;
var animFromCol = -1;
var animRow = -1;
var animCol = -1;

var animCurrentCol = -1;
var animCurrentRow = -1;

var animLength = 1000;
var currentAnim = 0;

var animPieceType = -1;

function animMakeMove(fromRow, fromCol, row, col) {
    // println("Anim from " + fromRow + ", " + fromCol + " to " + row + " " + col);
    
    animPieceType = board.get(fromRow, fromCol);
    board.set(fromRow, fromCol, -1);
    refresh();
    animPiece = imageFromPiece(board.get(fromRow, fromCol));
    animPiece.setSize(segment_width - (2 * PIECE_PADDING), segment_height - (2 * PIECE_PADDING));
    animPiece.setPosition((segment_width * fromCol) + PIECE_PADDING, (segment_height * fromRow) + PIECE_PADDING);
    add(animPiece);

    animFromRow = fromRow;
    animFromCol = fromCol;
    
    animCurrentRow = fromRow;
    animCurrentCol = fromCol;
    
    animRow = row;
    animCol = col;
    setTimer(animMove, 1);
    setTimer(animStop, animLength);
}

function animStop() {
    println("STOP")
    currentAnim = 0;
    board.set(animRow, animCol, animPieceType);
    stopTimer(animMove);
    stopTimer(animStop);
    remove(animPiece);
    refresh();
}

function animMove() {
    var nextRow = animCurrentRow + ((animRow - animFromRow) / (animLength / 100));
    var nextCol = animCurrentCol + ((animCol - animFromCol) / (animLength / 100));
    remove(animPiece);
    
    if ((animRow - animFromRow) > 0 && animRow < nextRow) {
        nextRow = animRow;
    } else if ((animRow - animFromRow) < 0 && animRow > nextRow) {
        nextRow = animRow;
    }
    if ((animCol - animFromCol) > 0 && animCol < nextCol) {
        nextCol = animCol;
    } else if ((animCol - animFromCol) < 0 && animCol > nextCol) {
        nextCol = animCol;
    }
    
    if (nextCol == animCol && nextRow == animRow) {
        animStop();
    }
    
    var piece = imageFromPiece(animPieceType);
    piece.setSize(segment_width - (2 * PIECE_PADDING), segment_height - (2 * PIECE_PADDING));
    piece.setPosition((segment_width * nextCol) + PIECE_PADDING, (segment_height * nextRow) + PIECE_PADDING);
    add(piece);
    // println("Animation to Row: " + nextRow + ", Col: " + nextCol);
    animPiece = piece;
    
    animCurrentCol = nextCol;
    animCurrentRow = nextRow;
    
    currentAnim += 1;
}

function makeMove(fromRow, fromCol, row, col) {
    try {
        var piece = board.get(fromRow, fromCol);
    }
    catch (e) {
        println("Failed move: " + fromRow + "," + fromCol + " to " + row + "," + col);
        throw e
    }
    board.set(row, col, piece);
    board.set(fromRow, fromCol, -1);
}

// var whiteKing = 0;
// var whiteQueen = 2;
// var whiteRook = 4;
// var whiteBishop = 6;
// var whiteKnight = 8;
// var whitePawn = 10;

function isValidMove(fromRow, fromCol, row, col) {
    var piece = board.get(fromRow, fromCol);
    
    var isWhite = true;
    
    if (piece % 2 == 1) {
        isWhite = false;
    }
    else if (piece % 2 == 0) {
        isWhite = true;
    }
    
    if (!isWhite) {
        piece -= 1;
    }
    var diffRow = row - fromRow;
    var diffCol = col - fromCol;
    if (piece == 0) {
        if ((diffRow >= -1 && diffRow <= 1) && (diffCol >= -1 && diffCol <= 1)) {
            return pieceIsWhite(getPieceAtTile(row, col)) != isWhite || getPieceAtTile(row, col) == -1;
        }
    } else if (piece == 2) {
        if (diffCol == 0) {
            //Up Down
            var ranIntoPiece = false;
            if (diffRow > 0) {
                for (var checkRow = 0; 0 > checkRow - diffRow; checkRow++) {
                    if (pieceAtTile(fromRow + checkRow, col) &&
                        (fromRow + checkRow) != fromRow) {
                        ranIntoPiece = true;
                    }
                }
                if (!ranIntoPiece) {
                    var piece = getPieceAtTile(fromRow + checkRow, col)
                    if ((pieceIsWhite(piece) != isWhite) && piece != -1) {
                    }
                    else if (piece != -1) {
                        ranIntoPiece = true;
                    }
                }
            } else {
                for (var checkRow = 0; 0 > diffRow + checkRow; checkRow++) {
                    if (pieceAtTile(fromRow - checkRow, col) &&
                        (fromRow - checkRow) != fromRow) {
                        ranIntoPiece = true;
                    }
                }
                if (!ranIntoPiece) {
                    var piece = getPieceAtTile(fromRow - checkRow, col)
                    if ((pieceIsWhite(piece) != isWhite) && piece != -1) {
                    }
                    else if (piece != -1) {
                        ranIntoPiece = true;
                    }
                }
            }
            return !ranIntoPiece;
        }
        else if (diffRow == 0) {
            var ranIntoPiece = false;
            if (diffCol > 0) {
                for (var checkCol = 0; 0 > checkCol - diffCol; checkCol++) {
                    if (pieceAtTile(row, fromCol + checkCol) &&
                        (fromCol + checkCol) != fromCol) {
                        ranIntoPiece = true;
                    }
                }
                if (!ranIntoPiece) {
                    var piece = getPieceAtTile(row, fromCol + checkCol)
                    if ((pieceIsWhite(piece) != isWhite) && piece != -1) {
                    }
                    else if (piece != -1) {
                        ranIntoPiece = true;
                    }
                }
            } else {
                for (var checkCol = 0; 0 > diffCol + checkCol; checkCol++) {
                    if (pieceAtTile(row, fromCol - checkCol) &&
                        (fromCol - checkCol) != fromCol) {
                        ranIntoPiece = true;
                    }
                }
                if (!ranIntoPiece) {
                    var piece = getPieceAtTile(row, fromCol - checkCol)
                    if ((pieceIsWhite(piece) != isWhite) && piece != -1) {
                    }
                    else if (piece != -1) {
                        ranIntoPiece = true;
                    }
                }
            }
            return !ranIntoPiece;
        }
        else {
            for (var colCheckOffset = -1; colCheckOffset <= 1; colCheckOffset += 2) {
                for (var rowCheckOffset = -1; rowCheckOffset <= 1; rowCheckOffset += 2) {
                    var ranIntoPiece = false;
                    var foundTile = false;
                    
                    var checkRow = fromRow;
                    var checkCol = fromCol;
                    while(board.inBounds(checkRow, checkCol)) {
                        if ((checkCol != fromCol && checkRow != fromRow) && (pieceAtTile(checkRow, checkCol))) {
                            ranIntoPiece = true;
                        }
                        
                        checkRow += rowCheckOffset;
                        checkCol += colCheckOffset;
    
                        if (checkRow == row && checkCol == col) {
                            foundTile = true;
                            break;
                        }
                    }
                    
                    if (!ranIntoPiece && board.inBounds(checkRow, checkCol)) {
                        var piece = getPieceAtTile(checkRow, checkCol)
                        if ((pieceIsWhite(piece) != isWhite) && piece != -1) {
                        }
                        else if (piece != -1) {
                            ranIntoPiece = true;
                        }
                    }
                    
                    if (foundTile) {
                        return !ranIntoPiece;
                    }
                }
            }
        }
    } else if (piece == 4) {
        if (diffCol == 0) {
            //Up Down
            var ranIntoPiece = false;
            if (diffRow > 0) {
                for (var checkRow = 0; 0 > checkRow - diffRow; checkRow++) {
                    if (pieceAtTile(fromRow + checkRow, col) &&
                        (fromRow + checkRow) != fromRow) {
                        ranIntoPiece = true;
                    }
                }
                if (!ranIntoPiece) {
                    var piece = getPieceAtTile(fromRow + checkRow, col)
                    if ((pieceIsWhite(piece) != isWhite) && piece != -1) {
                    }
                    else if (piece != -1) {
                        ranIntoPiece = true;
                    }
                }
            } else {
                for (var checkRow = 0; 0 > diffRow + checkRow; checkRow++) {
                    if (pieceAtTile(fromRow - checkRow, col) &&
                        (fromRow - checkRow) != fromRow) {
                        ranIntoPiece = true;
                    }
                }
                if (!ranIntoPiece) {
                    var piece = getPieceAtTile(fromRow - checkRow, col)
                    if ((pieceIsWhite(piece) != isWhite) && piece != -1) {
                    }
                    else if (piece != -1) {
                        ranIntoPiece = true;
                    }
                }
            }
            return !ranIntoPiece;
        }
        else if (diffRow == 0) {
            var ranIntoPiece = false;
            if (diffCol > 0) {
                for (var checkCol = 0; 0 > checkCol - diffCol; checkCol++) {
                    if (pieceAtTile(row, fromCol + checkCol) &&
                        (fromCol + checkCol) != fromCol) {
                        ranIntoPiece = true;
                    }
                }
                if (!ranIntoPiece) {
                    var piece = getPieceAtTile(row, fromCol + checkCol)
                    if ((pieceIsWhite(piece) != isWhite) && piece != -1) {
                    }
                    else if (piece != -1) {
                        ranIntoPiece = true;
                    }
                }
            } else {
                for (var checkCol = 0; 0 > diffCol + checkCol; checkCol++) {
                    if (pieceAtTile(row, fromCol - checkCol) &&
                        (fromCol - checkCol) != fromCol) {
                        ranIntoPiece = true;
                    }
                }
                if (!ranIntoPiece) {
                    var piece = getPieceAtTile(row, fromCol - checkCol)
                    if ((pieceIsWhite(piece) != isWhite) && piece != -1) {
                    }
                    else if (piece != -1) {
                        ranIntoPiece = true;
                    }
                }
            }
            return !ranIntoPiece;
        }
        else {
            // Diagonal
            return false;
        }
    } else if (piece == 6) {
        for (var colCheckOffset = -1; colCheckOffset <= 1; colCheckOffset += 2) {
            for (var rowCheckOffset = -1; rowCheckOffset <= 1; rowCheckOffset += 2) {
                var ranIntoPiece = false;
                var foundTile = false;
                
                var checkRow = fromRow;
                var checkCol = fromCol;
                while(board.inBounds(checkRow, checkCol)) {
                    if ((checkCol != fromCol && checkRow != fromRow) && (pieceAtTile(checkRow, checkCol))) {
                        ranIntoPiece = true;
                    }
                    
                    checkRow += rowCheckOffset;
                    checkCol += colCheckOffset;

                    if (checkRow == row && checkCol == col) {
                        foundTile = true;
                        break;
                    }
                }
                
                if (!ranIntoPiece && board.inBounds(checkRow, checkCol)) {
                    var piece = getPieceAtTile(checkRow, checkCol)
                    if ((pieceIsWhite(piece) != isWhite) && piece != -1) {
                    }
                    else if (piece != -1) {
                        ranIntoPiece = true;
                    }
                }
                
                if (foundTile) {
                    return !ranIntoPiece;
                }
            }
        }
    } else if (piece == 8) {
        if (((diffCol == -1 || diffCol == 1) && (diffRow == -2 || diffRow == 2))
        || ((diffRow == -1 || diffRow == 1) && (diffCol == -2 || diffCol == 2))) {
            return pieceIsWhite(getPieceAtTile(row, col)) != isWhite || getPieceAtTile(row, col) == -1;
        }
        
    } else if (piece == 10) {
        if (diffCol == 0) {
            if (isWhite) {
                if (fromRow == ROWS - 2) {
                    if (diffRow == -1 || diffRow == -2) {
                        return !pieceAtTile(row, col);
                    }
                }
                else {
                    if (diffRow == -1 && diffCol == 0) {
                        return !pieceAtTile(row, col);
                    }
                }
            }
            else {
                if (fromRow == 1) {
                    if (diffRow == 1 || diffRow == 2) {
                        return !pieceAtTile(row, col);
                    }
                }
                else {
                    if (diffRow == 1 && diffCol == 0) {
                        return !pieceAtTile(row, col);
                    }
                }
            }
        }
        else {
            if (isWhite) {
                if ((diffCol >= -1 && diffCol <= 1) && diffRow == -1) {
                    return pieceAtTile(row, col) && pieceIsWhite(getPieceAtTile(row, col)) != isWhite;
                }
            }
            else {
                if ((diffCol >= -1 && diffCol <= 1) && diffRow == 1) {
                    return pieceAtTile(row, col) && pieceIsWhite(getPieceAtTile(row, col)) != isWhite;
                }
            }
        }
    }
    return false;
}

function pieceIsWhite(piece) {
    if (piece == -1) {
        return false;
    }
    else if (piece % 2 == 1) {
        return false;
    }
    else if (piece % 2 == 0) {
        return true;
    }
}

function getPieceAtTile(row, col) {
    return board.get(row, col);
}

function pieceAtTile(row, col) {
    return board.get(row, col) != -1;
}

function createBoard() {
    var color = Color.white;
    for (var row = 0; row < ROWS; row++) {
        for (var col = 0; col < COLS; col++) {
            createRect(segment_width, segment_height, segment_width * col, segment_height * row, color);
            if (color === Color.white) {
                color = ALTERNATE_COLOR;
            }
            else {
                color = Color.white;
            }
        }
        if (color === Color.white) {
            color = ALTERNATE_COLOR;
        }
        else {
            color = Color.white;
        }
    }
}

function setupPieces() {
    for (var row = 0; row < board.numRows(); row++) {
        var boardRow = getRow(board, row);
        for (var col = 0; col < board.numCols(); col++) {
            var piece = imageFromPiece(boardRow[col]);
            piece.setSize(segment_width - (2 * PIECE_PADDING), segment_height - (2 * PIECE_PADDING));
            piece.setPosition((segment_width * col) + PIECE_PADDING, (segment_height * row) + PIECE_PADDING);
            add(piece);
        }
    }
}

function imageFromPiece(piece) {
    var imageUrl = "";
    if (piece == whiteKing) {
        imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/50px-Chess_klt45.svg.png";
    }
    else if (piece == blackKing) {
        imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/50px-Chess_kdt45.svg.png";
    }
    else if (piece == whiteQueen) {
        imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/50px-Chess_qlt45.svg.png";
    }
    else if (piece == blackQueen) {
        imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/50px-Chess_qdt45.svg.png";
    }
    else if (piece == whiteRook) {
        imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/50px-Chess_rlt45.svg.png";
    }
    else if (piece == blackRook) {
        imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/50px-Chess_rdt45.svg.png";
    }
    else if (piece == whiteBishop) {
        imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/50px-Chess_blt45.svg.png";
    }
    else if (piece == blackBishop) {
        imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/50px-Chess_bdt45.svg.png";
    }
    else if (piece == whiteKnight) {
        imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/50px-Chess_nlt45.svg.png";
    }
    else if (piece == blackKnight) {
        imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/50px-Chess_ndt45.svg.png";
    }
    else if (piece == whitePawn) {
        imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/50px-Chess_plt45.svg.png";
    }
    else if (piece == blackPawn) {
        imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/50px-Chess_pdt45.svg.png";
    }
    return new WebImage(imageUrl);
}

function outlineSquare(row, col) {
    var color = ALTERNATE_COLOR;
    if (col % 2 == 0) {
        if (row % 2 == 0) {
            color = Color.white;
        }
    }
    else if (row % 2 == 1) {
        color = Color.white;
    }
    var rect = createRect(segment_width, segment_height, segment_height * col, segment_width * row, color);
    rect.setBorderColor(OUTLINE_COLOR)       
    rect.setBorderWidth(OUTLINE_WIDTH)
    return rect;
}

function createRect(width, height, x, y, color) {
    var rect = new Rectangle(width, height);
    rect.setPosition(x, y);
    if (color) {
        rect.setColor(color);
    }
    add(rect);
    return rect;
}

function getRow(grid, row){
	var rowList = [];
	
	for(var col = 0; col < grid.numCols(); col++){
		var cur = grid.get(row, col);
		rowList.push(cur);
	}
	return rowList;
}

function printOut(msg) {
    if (debugMessages) {
        println(msg);
    }
}
