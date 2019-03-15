import React from 'react'
import axios from 'axios'


let GameOver  = ( { score } ) =>{

    // const submitGameResults = () =>{
    //     axios.pot('/definition/highscore').then((res)=>{
    //         this.setState({
             
    //         })
    //     })
    // }


    return(
        <div>

        <h1>GAME OVER</h1>    
        <h2>{score}</h2>
            <form>
                <input id="username" className="definitionAnswer" type="text"  placeholder = "Enter your user"/>
                {/* <button onClick = { ()=>{ submitGameResults() }}>Sumbit Game Result </button> */}
            </form>

        </div>

    )
}

export default GameOver;
