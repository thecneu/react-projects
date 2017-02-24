import { ADD_ENTRY, UPDATE_ENTRY, DELETE_ENTRY } from '../actions/constants'

export const entries = (state = [], action) => {
    switch(action.type) {
        case ADD_ENTRY:
            return [
                ...state,
                action.payload
            ]

        case UPDATE_ENTRY:
            return state.map(entry => {
                if (entry.id === action.payload.id) {
                    return {
                        ...entry,
                        ...action.payload.entry
                    }
                }
                return entry
            })

        case DELETE_ENTRY:
            const index = state.findIndex(entry => entry.id === action.payload.id)
            if (index !== -1) {
                return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
                ]
            } else {
                console.error('Remove out of bounds')
                return state
            }

        default:
            return state
    }
}
