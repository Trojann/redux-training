export default function sum(state = 3, action){
    switch (action.type) {
      case 'SUM':
        return Number(action.a) + Number(action.b);
      default:
        return state;
    }
}

// function funcWithError(){
//     throw Error('an error from sum')
// }
