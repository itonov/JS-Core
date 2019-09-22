function printChessBoard(sideSize) {
    console.log(`<div class="chessboard">`);
    let currentColor = "black";
    for (let i = 0; i < sideSize; i++) {
        console.log("<div>");

        for (let j = 0; j < sideSize; j++) {
            console.log(`    <span class="${currentColor}"></span>`);

            if (currentColor === "black") {
                currentColor = "white";
            } else {
                currentColor = "black";
            }
        }

        console.log("</div>");
    }
    console.log("</div>")
}

printChessBoard(2);