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
            
         }

        case "RIGHT_ANSWER":
        /**
         * check the answer against the word from api call and move on to the next question
         * if right{
         *      up date score 
         *      increase question number
         *      new defintion
         *      if score is greater than high score new high score equal current points
         *      reset timer
         * }
         * 
         * if wrong {
         *      take away a life/ or add strike
         *      if three strike move on to the next question
         *      
         * }
         */
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

        case  "GET_A_HINT" :
        /**
         * a hint to the word will appear on the screen
         * decrease life -1
         */
        return {
            ...state,
            example : state.result.example
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