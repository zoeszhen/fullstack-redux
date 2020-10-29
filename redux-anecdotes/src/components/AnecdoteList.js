import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { incrementVote, initAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import Notification from "./Notification"

const AnecdoteList = (props) => {
    const { filter, anecdotes, incrementVote, setNotification, initAnecdote, notification } = props;

    useEffect(() => {
        initAnecdote()
    }, [])

    const vote = (anecdote) => {
        const { id, content } = anecdote;
        incrementVote(id)
        setNotification(`You voted for ${content}`, 5, notification ? notification.timerId : undefined)
    }
    return (
        <>
            <Notification></Notification>
            {
                anecdotes
                    .filter(anecdote => anecdote.content.includes(filter))
                    .map(anecdote =>
                        <div key={anecdote.id}>
                            <div>
                                {anecdote.content}
                            </div>
                            <div>
                                has {anecdote.votes}
                                <button onClick={() => vote(anecdote)}>vote</button>
                            </div>
                        </div>
                    )
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdote,
        filter: state.filter,
        notification: state.notification
    }
}

const mapDispatchToProps = { incrementVote, initAnecdote, setNotification }

export default connect(
    mapStateToProps, mapDispatchToProps
)(AnecdoteList)