function solution(keyinput, board) {
    const answer = [0, 0]; // [0, -1]
    const directionObj = {
        'up': [0, 1],
        'right': [1, 0],
        'down': [0, -1],
        'left': [-1, 0]
    }
    const [rowLength, colLength] = [parseInt(board[0] / 2, 0), parseInt(board[1] / 2, 0)]
    // rowLength = 3, colLength = 4
    // ["down", "down", "down", "down", "down"]
    for (const key of keyinput){
        // 1loop xOffset = 0  yOffset = -1, nextX = 0 + 0, nextY = 0 + (-1)
        // 2loop xOffset = 0  yOffset = -1, nextX = 0 + 0, nextY = -1 + (-1)
        // 3loop xOffset = 0  yOffset = -1, nextX = 0 + 0, nextY = -2 + (-1)
        // 4loop xOffset = 0  yOffset = -1, nextX = 0 + 0, nextY = -3 + (-1) = -4
        // 5loop xOffset = 0  yOffset = -1, nextX = 0 + 0, nextY = -4 + (-1) = -5
        const [xOffset, yOffset] = directionObj[key]; // [0, -1]
        const nextX = answer[0] + xOffset;  // 0
        const nextY = answer[1] + yOffset;  // -5
        const canGoNext = nextX >= -rowLength
            && nextX <= rowLength 
            && nextY >= -colLength
            && nextY <= colLength;
        
        if (canGoNext) {
            answer[0] = nextX;
            answer[1] = nextY;
        }
    }
    
    return answer;
}