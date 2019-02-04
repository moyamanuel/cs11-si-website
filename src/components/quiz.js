import React from 'react'
import styles from '../components/quiz.module.css'

class Quiz extends React.Component {
    retrieveWordBank() {
        let answerBankItems = this.props.answerBank.map((word) => {
            <li>{word}</li>
        })
        console.log(answerBankItems)
        return answerBankItems
    }
    render() {
        let answerBankItems = this.props.answerBank.map((word) => {
            <li>{word}</li>
        })
        return (
            <div className={styles.card}>
                <h1>{this.props.question}</h1>
                <ul>
                    {answerBankItems}
                </ul>
            </div>
        )
    }
}

export default Quiz