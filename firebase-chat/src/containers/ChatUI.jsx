import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMessage, getMessages } from '../data/actions'
import Input from '../components/Input'
import Messages from '../components/Messages'

class ChatUI extends Component {
  state = {
    text: ''
  }

  onChange = (e) => {
    const el = e.currentTarget
    this.setState({
      [el.name]: el.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()

    this.props.addMessage(this.state.text)
  }

  componentDidMount() {
    this.props.getMessages()
  }

  render() {
    return (
      <article>
        <section className="messages">
          <Messages messages={this.props.messages} />
        </section>
        <form onSubmit={this.onSubmit}>
          <Input placeholder="Say something cool..." name="text" value={this.state.text} onChange={this.onChange} />
        </form>
      </article>
    )
  }
}

const mapStateToProps = ({messages}) => ({ messages })

export default connect(mapStateToProps, { addMessage, getMessages })(ChatUI)