import React from 'react'
import Quiz from '../components/quiz' 
export default ({ data }) => {
    let questionList = data.allContentfulFlashCard.edges.map(currentQuestionObject => 
        <Quiz
            question={currentQuestionObject.node.question}
            wordBank={currentQuestionObject.node.wordBank}
            name={currentQuestionObject.node.question}
        />
    )
    return(
        <form>
            {questionList}
            <button>Submit</button>
        </form>
    )
}

export const query = graphql`
    query quizzesQuery {
        allContentfulFlashCard {
            edges {
              node {
                question
                rightAnswer
                wordBank
              }
            }
          }
      }      
`