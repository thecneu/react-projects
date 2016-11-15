import uuid from 'uuid';

export const ADD_EXERCISE = 'ADD_EXERCISE'
export const UPDATE_EXERCISE = 'UPDATE_EXERCISE'
export const DELETE_EXERCISE = 'DELETE_EXERCISE'
export const ADD_ENTRY = 'ADD_ENTRY'
export const UPDATE_ENTRY = 'UPDATE_ENTRY'
export const DELETE_ENTRY = 'DELETE_ENTRY'
export const FETCHING_DATA = 'FETCHING_DATA'

export const addExercise = ({title, type, image, sets, reps}) => ({
  type: ADD_EXERCISE,
  data: {
    id: uuid.v4(),
    timestamp: new Date(),
    title,
    type,
    image,
    sets,
    reps
  }
})

export const updateExercise = (id, update) => ({
  type: UPDATE_EXERCISE,
  data: {
    id,
    timestamp: new Date(),
    ...update
  }
})

export const removeExercise = (id) => ({
  type: DELETE_EXERCISE,
  data: {
    id
  }
})

export const addEntry = ({id, weight, time, calories, distance}) => ({
  type: ADD_ENTRY,
  data: {
    id: uuid.v4(),
    timestamp: new Date(),
    exerciseId: id,
    weight,
    time,
    distance,
    calories
  }
})

export const updateEntry = (id, update) => ({
  type: UPDATE_ENTRY,
  data: {
    id,
    timestamp: new Date(),
    ...update
  }
})

export const deleteEntry = (id) => ({
  type: DELETE_ENTRY,
  data: {
    id
  }
})

export const fetchData = () => ({
  type: FETCHING_DATA
})