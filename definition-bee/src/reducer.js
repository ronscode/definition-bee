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
    question: { 

        word : '',
        defintion : ''

    },
    questionNumber : 0,
    answer: '',
    score: 0,
    strike : 0,
    skips: 0,
    highScores : [],
    // history : [],
    startedAt: undefined,
    stoppedAt: undefined,
    baseTime: undefined,
    currentUser: {
        username: "lsjhfdsl"
    }
}


let reducer = (state = initialState, actions) =>{

    let { type, submittedAnswer, definition } = actions
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
                question: definition,
                score : 0,
                strike:0,
                skips: 0
            }


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
            


        case "ANSWER": 
            console.log(submittedAnswer)
            if (submittedAnswer === state.question.word) {
                return {
                    ...state,
                    //score: state.score++,
                }
            } else {
                return {
                    ...state,
                    score: state.score - 1,
                    strike : state.strike++
                }
            }

        case "LOAD_DEFINITION":
            console.log(definition)
            return {
                ...state,
                question: definition
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
                strike : state.strike +1
            }

        case "SUBMIT_SCORE":
        // axios.post('/scores/record', {points: state.score}).then(() => {
            return {

            }
            

        default :

            return{
                ...state
            }
    }

    

}

export default reducer