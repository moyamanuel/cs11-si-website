import React from 'react'

class Quiz extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.questions}</h1>
            </div>
        )
    }
}

export default Quiz