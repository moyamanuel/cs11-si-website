import React from 'react'
import styles from '../components/quiz.module.css'

class Quiz extends React.Component {
    retrieveWordBank() {
        let answerBankItems = this.props.wordBank.map((word) =>
        <div>
            <input name={this.props.name} type="radio" value={word}/>
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