import React from 'react'
import { add } from '../actions'
import { update } from '../utils/jsonStorage'

const Add = () => (
    <section className="add-module">
        <h2>Add Exercise</h2>
        <form onSubmit={(e) => {
            e.preventDefault()

            const form = e.currentTarget;
            const data = {
                time: form.time.value,
                distance: form.distance.value,
                calories: form.calories.value
            }

            update(add(data)).then(response => console.log('final response', response))
            // form.reset()
        }}>
            <div className="form-group">
                <input type="text" name="time" placeholder="Time" />
                <input type="text" name="distance" placeholder="Distance" />
                <input type="text" name="calories" placeholder="Calories" />
            </div>
            <div className="form-group">
                <button type="submit">Add</button>
            </div>
        </form>
    </section>
);

export default Add;
