import React, {useState,useEffect} from 'react'
import { checkingWinning } from './functions/checkingWinning';
const MainView = () => {

  const [button1, setButton1] = useState();
  const [button2, setButton2] = useState();
  const [button3, setButton3] = useState();
  const [button4, setButton4] = useState();
  const [button5, setButton5] = useState();
  const [button6, setButton6] = useState();
  const [button7, setButton7] = useState();
  const [button8, setButton8] = useState();
  const [button9, setButton9] = useState();
  const [winner, setWinner] = useState("ONGOING GAME!!!")

 

  const reset = ()=>{
    setButton1('')
    setButton2('')
    setButton3('')
    setButton4('')
    setButton5('')
    setButton6('')
    setButton7('')
    setButton8('')
    setButton9('')
  }

  useEffect(() => {
    setWinner(checkingWinning(button1,button2,button3,button4,button5,button6,button7,button8,button9))
  }, [button1,button2,button3,button4,button5,button6,button7,button8,button9])


  return (
    <div className='main'>

        <h3>Game start by the tap on BOX</h3>
        <h4>Player one is <b>X</b></h4>
        <h4>Player two is <b>0</b></h4>
        <h5>{winner}</h5>

        <br/>
        <br/>
        <input type="text" value={button1} className="b1" onChange={(e)=>{setButton1(e.target.value)}}/>
   
        <input type="text" value={button2} className="b2" onChange={(e)=>{setButton2(e.target.value)}}/>
   
        <input type="text" value={button3} className="b3" onChange={(e)=>{setButton3(e.target.value)}}/>
      
        <br/>
        <br/>
   
        <input type="text" value={button4} className="b4" onChange={(e)=>{setButton4(e.target.value)}}/>
               
        <input type="text" value={button5} className="b5" onChange={(e)=>{setButton5(e.target.value) }}/>
   
        <input type="text" value={button6} className="b6" onChange={(e)=>{setButton6(e.target.value)}}/>
  
        <br/>
        <br/>
   
        <input type="text" value={button7} className="b7" onChange={(e)=>{setButton7(e.target.value)}}/>
   
        <input type="text" value={button8} className="b8" onChange={(e)=>{setButton8(e.target.value)}}/>
   
        <input type="text" value={button9} className="b9" onChange={(e)=>{setButton9(e.target.value) }}/>

        <br/>
        <br/>
        
        <br/>
        <br/>
   
        <button onClick={()=>reset()}>RESET</button>

    </div>
  )
}

export default MainView;