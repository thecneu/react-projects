import uuid from 'uuid'
import { ADD_ENTRY, UPDATE_ENTRY, DELETE_ENTRY } from './constants'

export const addEntry = (entry, id) => ({
    type: ADD_ENTRY,
    payload: {
        id: id === undefined ? uuid.v4() : id,
        ...entry
    }
})

export const updateEntry = (id, entry) => ({
    type: UPDATE_ENTRY,
    payload: {
        id,
        entry
    }
})

export const deleteEntry = (id) => ({
    type: DELETE_ENTRY,
    payload: {
        id
    }
})
