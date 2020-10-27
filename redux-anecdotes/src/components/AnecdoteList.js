import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementVote } from '../reducers/anecdoteReducer'
import Notification from "./Notification"

const AnecdoteCreator = (props) => {
    const anecdotes = useSelector(state => state.anecdote)
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(incrementVote(id))
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
                                <button onClick={() => vote(anecdote.id)}>vote</button>
                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default AnecdoteCreator;