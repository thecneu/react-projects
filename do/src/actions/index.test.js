/* global describe it expect */

import { ADD_ENTRY, UPDATE_ENTRY, DELETE_ENTRY } from './constants'
import { addEntry, updateEntry, deleteEntry } from './index'

describe('actions', () => {
    describe('entries', () => {
        it('add entry', () => {
            const id = 0
            const payload = {
                type: 'cardio',
                time: 30,
                distance: 1.1,
                calories: 200,
                date: '11/14'
            }

            const expectedAction = {
                type: ADD_ENTRY,
                payload: {
                    id: 0,
                    type: 'cardio',
                    time: 30,
                    distance: 1.1,
                    calories: 200,
                    date: '11/14'
                }
            }

            expect(
                addEntry(payload, id)
            ).toEqual(
                expectedAction
            )
        })

        it('update entry', () => {
            const id = 0
            const update = {
                time: 42,
                calories: 420
            }

            const expectedAction = {
                type: UPDATE_ENTRY,
                payload: {
                    id,
                    entry: update
                }
            }

            expect(
                updateEntry(id, update)
            ).toEqual(
                expectedAction
            )
        })

        it('delete entry', () => {
            const id = 0
            const expectedAction = {
                type: DELETE_ENTRY,
                payload: {
                    id
                }
            }

            expect(
                deleteEntry(id)
            ).toEqual(
                expectedAction
            )
        })
    })
})
