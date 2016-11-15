/* global describe it expect */
import { ADD_ENTRY, UPDATE_ENTRY, DELETE_ENTRY } from '../actions/constants'
import { entries } from './index'

describe('reducers', () => {
    describe('entries', () => {
        it('initial state', () => {
            const prevState = undefined
            const nextState = []

            expect(
                entries(prevState, {})
            ).toEqual(
                nextState
            )
        })
        it('add entry', () => {
            let prevState = []
            let nextState = [{
                id: 0,
                type: 'cardio',
                time: 30,
                distance: 1.1,
                calories: 200,
                date: '11/14'
            }]
            let action = {
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
                entries(prevState, action)
            ).toEqual(
                nextState
            )

            prevState = [{
                id: 0,
                type: 'cardio',
                time: 30,
                distance: 1.1,
                calories: 200,
                date: '11/14'
            }]
            nextState = [{
                id: 0,
                type: 'cardio',
                time: 30,
                distance: 1.1,
                calories: 200,
                date: '11/14'
            }, {
                id: 1,
                type: 'cardio',
                time: 30,
                distance: 1.8,
                calories: 400,
                date: '11/14'
            }]
            action = {
                type: ADD_ENTRY,
                payload: {
                    id: 1,
                    type: 'cardio',
                    time: 30,
                    distance: 1.8,
                    calories: 400,
                    date: '11/14'
                }
            }
            expect(
                entries(prevState, action)
            ).toEqual(
                nextState
            )
        })

        it('update entry', () => {
            let prevState = [{
                id: 0,
                type: 'cardio',
                time: 30,
                distance: 1.1,
                calories: 200,
                date: '11/14'
            }]
            let nextState = [{
                id: 0,
                type: 'cardio',
                time: 42,
                distance: 2.3,
                calories: 420,
                date: '11/14'
            }]
            let action = {
                type: UPDATE_ENTRY,
                payload: {
                    id: 0,
                    entry: {
                        time: 42,
                        distance: 2.3,
                        calories: 420
                    }
                }
            }
            expect(
                entries(prevState, action)
            ).toEqual(
                nextState
            )

            prevState = [{
                id: 0,
                type: 'cardio',
                time: 30,
                distance: 1.1,
                calories: 200,
                date: '11/14'
            }, {
                id: 1,
                type: 'cardio',
                time: 30,
                distance: 1.8,
                calories: 400,
                date: '11/14'
            }]
            nextState = [{
                id: 0,
                type: 'cardio',
                time: 30,
                distance: 1.1,
                calories: 200,
                date: '11/14'
            }, {
                id: 1,
                type: 'cardio',
                time: 42,
                distance: 2.3,
                calories: 420,
                date: '11/14'
            }]
            action = {
                type: UPDATE_ENTRY,
                payload: {
                    id: 1,
                    entry: {
                        time: 42,
                        distance: 2.3,
                        calories: 420
                    }
                }
            }
            expect(
                entries(prevState, action)
            ).toEqual(
                nextState
            )
        })

        it('remove entry', () => {
            let prevState = [{
                id: 0,
                type: 'cardio',
                time: 30,
                distance: 1.1,
                calories: 200,
                date: '11/14'
            }]
            let nextState = []
            let action = {
                type: DELETE_ENTRY,
                payload: {
                    id: 0
                }
            }
            expect(
                entries(prevState, action)
            ).toEqual(
                nextState
            )

            prevState = [{
                id: 0,
                type: 'cardio',
                time: 30,
                distance: 1.1,
                calories: 200,
                date: '11/14'
            }, {
                id: 1,
                type: 'cardio',
                time: 30,
                distance: 1.8,
                calories: 400,
                date: '11/14'
            }]
            nextState = [{
                id: 1,
                type: 'cardio',
                time: 30,
                distance: 1.8,
                calories: 400,
                date: '11/14'
            }]

            action = {
                type: DELETE_ENTRY,
                payload: {
                    id: 0
                }
            }
            expect(
                entries(prevState, action)
            ).toEqual(
                nextState
            )
        })
    })
})
