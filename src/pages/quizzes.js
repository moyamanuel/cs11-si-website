import React from 'react'
import Quiz from '../components/quiz' 
export default ({ data }) => (
    <Quiz questions={data.contentfulFlashCard.wordBank}/>
)

export const query = graphql`
    query quizzesQuery {
        contentfulFlashCard {
          rightAnswer
          wordBank
        }
      }
      
`