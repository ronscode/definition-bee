// Action Creators for timer

// function startTimer(baseTime = 0) {
//     return {
//       type: "START_TIMER",
//       baseTime: baseTime,
//       now: new Date().getTime()
//     };
//   }
  
//   function stopTimer() {
//     return {
//       type: "STOP_TIMER",
//       now: new Date().getTime()
//     };
//   }
  
//   function resetTimer() {
//     return {
//       type: "RESET_TIMER",
//       now: new Date().getTime()
//     }
//   }

let initialState = {
    definition: [
        { 
          word : '',
          defintion : ''
        }
    ],
    example : '',
    questionNumber : 0,
    answer: '',
    score: 0,
    strike : 0,
    skips: 0,
    highScore : [],
    history : [],
    startedAt: undefined,
    stoppedAt: undefined,
    baseTime: undefined
}


let reducer = (state = initialState, actions) =>{

    let { type } = actions

    switch(type){
        
        // case "RESET_TIMER":
        // return {
        //     ...state,
        //     baseTime: 0,
        //     startedAt: state.startedAt ? type.now : undefined,
        //     stoppedAt: state.stoppedAt ? type.now : undefined
        // };

        // case "START_TIMER":
        // return {
        //     ...state,
        //     baseTime: type.baseTime,
        //     startedAt: type.now,
        //     stoppedAt: undefined
        // };

        // case "STOP_TIMER":
        // return {
        //     ...state,
        //     stoppedAt: type.now
        // }

        case "LOAD_GAME" :
        /**
         * Once users select to start the game the game the de
         */
         return { 
            ...state,
            defintion : state.definition  
         }

        case "RIGHT_ANSWER":
        
        return {
            ...state,
            defintition : state.definition,
            score: state.score +1,
            
        }

        case "WRONG_ANSWER":
        return {
            ...state,
            defintition : state.definition,
            strike : state.strike +1,

        }

        case "SKIP":
        /**
         * Moves on to the next question
         * increase question number 
         * new definition
         * decrease life - 1
         */

        return{
            ...state,
            defintion : state.defintion,
            strike : state.strike +1
        }

        default:
            return{
                ...state
            }
    }

    

}

export default reducer