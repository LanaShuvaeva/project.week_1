
const hello = {
    'Tester Board': {
      'To Do': ['Laundry', 'Buy Apples', 'Pay Phone Bill'],
      'Doing': ['Laundry', 'Studying Javascript', 'Studying HTML', 'Studying Ruby'],
      'Done': ['Laundry']
    },
    'Dreams': {
      'Wish List': ['Conquer the Seven Kingdoms', 'Get my baby back', 'My hand needs to chill'],
    }
};

// Function lists two default boards
function listBoards(obj) {
  let newBoard = "----------------------\n";
  let count = 0;
  for (let o in obj) {
    count++;
    newBoard += `${count} - ${o}\n----------------------\n`
  }
return newBoard;
}

console.log(listBoards(hello));


//
// let boardName = 'School';
//
// // Function creates new boards
// function createBoard(boardName) {
// let boardList = Object.getOwnPropertyNames(hello);
//   if (!boardList.includes(boardName)){ //Object.keys(hello))
//     hello[boardName] = {}
//   console.log(`Board "${boardName}" was created!`);
//   } else {
//   console.log('Board already exists');
//   }
// return boardName;
// }
// createBoard(boardName);
//

// Function displays default boards + new boards

function listBoardsNew(obj) {
  let newBoard = "----------------------\n";
  let count = 0;
  for (let o in obj) {
    count++;
    newBoard += `${count} - ${o}\n----------------------\n`
  }
return newBoard;
}
console.log(listBoardsNew(hello));

//Function that removes board

//let boardName = 'Dreams';

function removeBoard(boardName) {
let boardList = Object.getOwnPropertyNames(hello);
//console.log(`----------${boardList}--------------`);
  if (boardList.includes(boardName)){ //Object.keys(hello))
    delete hello[boardName]; //delete hello[key];
  console.log(`Board "${boardName}" was deleted!`);

  } else {
  console.log('Board doesn\'t exist');
  }
return boardName;
  }
//
//
// removeBoard(boardName);
//////////////////////////////////
//console.log(hello.dreams);
//console.log(Object.keys(hello));
//////////////////////////////////

// Display Board function
let boardName = 'Dreams';

function displayBoard(boardName) {
  let boardList = Object.getOwnPropertyNames(hello);
  let list = Object.entries(hello[boardName]);
    if (boardList.includes(boardName)){
      // console.log(hello[boardName]);
      for (let board in hello[boardName]) {
        let newBoard = "\n|----------------------\n";
        console.log(`${newBoard}|  ${board} ${newBoard}`);
        for (let i=0; i < hello[boardName][board].length; i++) {
          console.log(`|> ${hello[boardName][board][i]}`);
        }
      }
    } else {
    console.log('Board doesn\'t exist');
    }
  return boardName;
}

displayBoard(boardName);

// Function that creates list

function createList(boardName, listName) {
  let boardList = Object.getOwnPropertyNames(hello);
   if (!boardList.includes(boardName)){ //Object.keys(hello))
     hello[boardName] = {}
   console.log(`Board "${boardName}" was created!`);
   } else {
   console.log('Board already exists');
   }
 return boardName;
 }
 createBoard(boardName);
}

// let boardName = 'School';
//
// // Function creates new boards
// function createBoard(boardName) {
// let boardList = Object.getOwnPropertyNames(hello);
//   if (!boardList.includes(boardName)){ //Object.keys(hello))
//     hello[boardName] = {}
//   console.log(`Board "${boardName}" was created!`);
//   } else {
//   console.log('Board already exists');
//   }
// return boardName;
// }
// createBoard(boardName);
