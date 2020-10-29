import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementVote, initAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import Notification from "./Notification"

const AnecdoteCreator = (props) => {
    const anecdotes = useSelector(state => state.anecdote)
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initAnecdote())
    }, [dispatch])

    const vote = (anecdote) => {
        const { id, content } = anecdote;
        dispatch(incrementVote(id))
        dispatch(setNotification(`you voted '${content}'`, 10))
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

export default AnecdoteCreator;