import uuid from 'uuid'

export const add = (data) => ({
    id: uuid.v4(),
    timestamp: new Date(),
    time: data.time,
    distance: data.distance,
    calories: data.calories
})
