export const checkingWinning = (button1,button2,button3,button4,button5,button6,button7,button8,button9) =>{

    if(
      (button1 === 'x' || button1 === 'X') && (button2 === 'x' || button2 === 'X') && (button3 === 'x' || button3 === 'X') ||
      (button1 === 'x' || button1 === 'X') && (button5 === 'x' || button5 === 'X') && (button9 === 'x' || button9 === 'X') ||
      (button1 === 'x' || button1 === 'X') && (button4 === 'x' || button4 === 'X') && (button7 === 'x' || button7 === 'X') ||
      (button2 === 'x' || button2 === 'X') && (button5 === 'x' || button5 === 'X') && (button8 === 'x' || button8 === 'X') ||
      (button3 === 'x' || button3 === 'X') && (button5 === 'x' || button5 === 'X') && (button7 === 'x' || button7 === 'X') ||
      (button3 === 'x' || button3 === 'X') && (button6 === 'x' || button6 === 'X') && (button9 === 'x' || button9 === 'X') ||
      (button4 === 'x' || button4 === 'X') && (button5 === 'x' || button5 === 'X') && (button6 === 'x' || button6 === 'X') ||
      (button7 === 'x' || button7 === 'X') && (button8 === 'x' || button8 === 'X') && (button9 === 'x' || button9 === 'X') 
      ){
      return 'Player one is Winner'
    }else if(
      (button1 === 'o' || button1 === 'O') && (button2 === 'o' || button2 === 'O') && (button3 === 'o' || button3 === 'O') ||
      (button1 === 'o' || button1 === 'O') && (button5 === 'o' || button5 === 'O') && (button9 === 'o' || button9 === 'O') ||
      (button1 === 'o' || button1 === 'O') && (button4 === 'o' || button4 === 'O') && (button7 === 'o' || button7 === 'O') ||
      (button2 === 'o' || button2 === 'O') && (button5 === 'o' || button5 === 'O') && (button8 === 'o' || button8 === 'O') ||
      (button3 === 'o' || button3 === 'O') && (button5 === 'o' || button5 === 'O') && (button7 === 'o' || button7 === 'O') ||
      (button3 === 'o' || button3 === 'O') && (button6 === 'o' || button6 === 'O') && (button9 === 'o' || button9 === 'O') ||
      (button4 === 'o' || button4 === 'O') && (button5 === 'o' || button5 === 'O') && (button6 === 'o' || button6 === 'O') ||
      (button7 === 'o' || button7 === 'O') && (button8 === 'o' || button8 === 'O') && (button9 === 'o' || button9 === 'O') 
    ){
        return 'Player two is Winner'
    }else{
        return'ONGOING GAME!!!' 
    }
  }