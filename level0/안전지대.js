function zip(arr, ...arrs) {
    return arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));
  }
  
  function markSafeZone(curX, curY, board){
      const N = board.length;
      const dxs = [-1, -1, -1, 0, 1, 1, 1, 0];
      const dys = [-1, 0, 1, 1, 1, 0, -1, -1];
      
      board[curX][curY] = 'x'
  
      for (const [dx, dy] of zip(dxs, dys)){
          const [aroundX, aroundY] = [curX + dx, curY + dy];
          const isInBoard = 0 <= aroundX && aroundX < N && 0 <= aroundY && aroundY < N;
          
          if (isInBoard && board[aroundX][aroundY] == 'o'){
              board[aroundX][aroundY] = 'x';
          }
      }
  }
  
  
  function solution(board) {
      const N = board.length;
      let count = 0;
      // const safeZone = Array(N).fill(Array(N).fill('o')) // => each row array reference same memory address
      const safeZone = Array(N).fill(0).map(() => Array(N).fill('o'))
      console.log(safeZone);
  
      for (let rowIndex = 0; rowIndex < N; rowIndex++){
          for (let colIndex = 0; colIndex < N; colIndex++){
              // 지뢰일 때 
              if (board[rowIndex][colIndex] === 1) markSafeZone(rowIndex, colIndex, safeZone)
          }
      }
      
      // count safeZone
      for (const row of safeZone){
          for (const value of row){
              count += value === 'o';
          }
      }
  
      return count;
  }
  
  // level2, 3 -> bfs, dfs
  // 
  
  // // 진완님
  // function solution(board) {
  //     let count = 0;
  //     const nearMap = [
  //         [-1,-1],
  //         [-1,0],
  //         [-1,1],
  //         [0,-1],
  //         [0,1],
  //         [1,-1],
  //         [1,0],
  //         [1,1],
  //     ]
      
  //     const canAccess = (n,m) => n >= 0 && n < board.length && m >= 0 && m < board.length;
  //     for(let i = 0; i < board.length; i++){
  //         for(let j = 0; j< board.length; j++){
  //             if(board[i][j] !== 1 && !nearMap.some(([n,m]) => (canAccess(i+n,j+m) && board[i+n][j+m] === 1))) {
  //                count++;
  //             }
  //         }
  //     }
  
  //     return count;
  // }