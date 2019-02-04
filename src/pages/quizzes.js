import React from 'react'
import Quiz from '../components/quiz' 
export default ({ data }) => (
    <Quiz
        question={data.contentfulFlashCard.question}
        answerBank={data.contentfulFlashCard.wordBank}
    />
)

export const query = graphql`
    query quizzesQuery {
        contentfulFlashCard {
          question
          rightAnswer
          wordBank
        }
      }
      
`