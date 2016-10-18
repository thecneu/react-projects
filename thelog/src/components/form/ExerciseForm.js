import React from 'react';

const ExerciseForm = ({addExercise}) => (
  <form onSubmit={(e) => {
    const form = e.currentTarget
    const data = {
      title: form.title.value,
      image: form.image.value,
      sets: form.sets.value,
      reps: form.reps.value,
      type: form.type.value
    }

    addExercise(data)
  }}>
    <input type="text" name="title" placeholder="Title"/>
    <input type="text" name="image" placeholder="Image URL"/>
    <div className="input-group">
      <input type="text" name="sets" placeholder="sets" value="4"/>
      <input type="text" name="reps" placeholder="reps" value="10"/>
    </div>
    <select name="type">
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

export default ExerciseForm