import {checkingWinning} from "./functions/checkingWinning";

describe('test--> test most commen 3 case with player 1 start in 1.1',()=>{
    test('start 1 -> 2 ->3',()=>{
        expect(checkingWinning('x','x','x')).toBe('Player one is Winner')
    })
    test('start 1 -> 5 ->9',()=>{
        expect(checkingWinning('x','2','3','4','x','6','7','8','x')).toBe('Player one is Winner')
    })

    test('start 1 -> 4 ->7',()=>{
        expect(checkingWinning('x','2','3','x','5','6','x','8','9')).toBe('Player one is Winner')
    })
})

describe('test--> test most commen 3 case with player 2 start in 1.2 and 1.3',()=>{
   
    test('start 2 -> 5 ->8',()=>{
        expect(checkingWinning('1','o','3','4','o','6','7','o','9')).toBe('Player two is Winner')
    })

    test('start 3 -> 5 ->7',()=>{
        expect(checkingWinning('1','2','o','4','o','6','o','8','9')).toBe('Player two is Winner')
    })

    test('start 3 -> 6 ->9',()=>{
        expect(checkingWinning('1','2','o','4','5','o','7','8','o')).toBe('Player two is Winner')
    })
})

describe('test--> test with upper case',()=>{
   
    test('start 1 -> 2 ->3 uppercase only player 1',()=>{
        expect(checkingWinning('X','X','X')).toBe('Player one is Winner')
    })

    test('start 1 -> 2 ->3 uppercase only player 2',()=>{
        expect(checkingWinning('O','O','O')).toBe('Player two is Winner')
    })

    test('start 1 -> 2 ->3 uppercase player 1',()=>{
        expect(checkingWinning('X','x','X')).toBe('Player one is Winner')
    })

  
})
describe('test--> test with unexpected values and looser',()=>{
   
    test('unexxpected values',()=>{
        expect(checkingWinning('1','2','3','4','5','6','7','8','9')).toBe('ONGOING GAME!!!')
    })

    test('looser values',()=>{
        expect(checkingWinning('x','o','X','O','O','X','X','x','o')).toBe('ONGOING GAME!!!')
    })

  
})