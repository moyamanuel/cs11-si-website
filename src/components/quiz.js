import React from 'react'
import styles from '../components/quiz.module.css'

class Quiz extends React.Component {
    retrieveWordBank() {
        var answerBankItems = this.props.answerBank.map((word) =>
        <div>
            <input name="answer" type="radio" value={word}/>
            <label>{word}</label>
        </div>
        )
        return answerBankItems
    }
    render() {
        return (
            <div className={styles.card}>
                <h1>{this.props.question}</h1>
                <form>
                    {this.retrieveWordBank()}
                </form>
            </div>
        )
    }
}

export default Quiz