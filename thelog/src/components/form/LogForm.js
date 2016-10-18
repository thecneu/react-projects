import React from 'react';
import Exercise from './Exercise';
import Cardio from './Cardio';

const LogForm = ({addEntry}) => (
  <form onSubmit={(e) => {
    const form = e.currentTarget
    const data = {
      exerciseId: form.exerciseId.value,
      weight: form.weight.value,
      time: form.time.value,
      distance: form.distance.value,
      calories: form.calories.value
    }

    addEntry(data)
  }}>

    {this.exercise ? <Exercise /> : <Cardio />}

    <select name="type" onChange={(e) => {
      const form = e.currentTarget
      this.exercise = !/cardio/.test(form.value.toLowerCase())
    }}>
      <option value="">Select Exercise Type</option>
      <option value="Cardio"></option>
      <option value="Abs"></option>
      <option value="Back"></option>
      <option value="Biceps"></option>
      <option value="Chest"></option>
      <option value="Legs"></option>
      <option value="Shoulders"></option>
      <option value="Triceps"></option>
    </select>
    <button type="submit">Add Exercise</button>
  </form>
)

export default LogForm