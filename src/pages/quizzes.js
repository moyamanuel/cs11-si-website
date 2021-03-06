import React from 'react'
import Layout from '../components/layout'
import Quiz from '../components/quiz' 
import { graphql } from 'gatsby'
export default ({ data }) => {
    let questionList = data.allContentfulFlashCard.edges.map(currentQuestionObject => 
        <Quiz
            question={currentQuestionObject.node.question}
            wordBank={currentQuestionObject.node.wordBank}
            name={currentQuestionObject.node.question}
        />
    )
    return(
        <Layout>
            <form>
                {questionList}
                <button>Submit</button>
            </form>
        </Layout>
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