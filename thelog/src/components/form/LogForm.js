import React from 'react';

class LogForm extends React.Component {
  state = {
    type: 'cardio'
  }

  renderExercise() {
    return (
      <div className="form-group">
        {/* select name from list */}
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="weight" placeholder="Weight" />
      </div>
    )
  }

  renderCardio() {
    return (
      <div className="form-group">
        <input type="text" name="time" placeholder="Time" />
        <input type="text" name="distance" placeholder="Distance" />
        <input type="text" name="calories" placeholder="Calories" />
      </div>
    )
  }

  render() {
    return (
      <form onSubmit={(e) => {
        const form = e.currentTarget
        const data = {
          exerciseId: form.exerciseId.value,
          name: form.name.value,
          weight: form.weight.value,
          time: form.time.value,
          distance: form.distance.value,
          calories: form.calories.value
        }

        this.props.addEntry(data)
      }}>
        <select name="type" onChange={(e) => {
          const form = e.currentTarget
          this.setState({
            type: form.value.toLowerCase()
          })
        }}>
          <option value="cardio">Cardio</option>
          <option value="exercise">Exercise</option>
        </select>

        {this.state.type === 'exercise' ? this.renderExercise() : this.renderCardio()}

        <button type="submit">Add Exercise</button>
      </form>
    )
  }
}

export default LogForm