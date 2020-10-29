import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementVote, initAnecdote } from '../reducers/anecdoteReducer'
import Notification from "./Notification"
import noteService from '../service/anecdotes'

const AnecdoteCreator = (props) => {
    const anecdotes = useSelector(state => state.anecdote)
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initAnecdote())
    }, [dispatch])

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