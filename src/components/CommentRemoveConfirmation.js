import React, {Component} from 'react'

class CommentRemoveConfirmation extends Component {
  constructor() {
    super()

    this.state = {
      showConfirm: false
    }
    this._confirmDelete = this._confirmDelete.bind(this)
    this._toggleConfirmMessage = this._toggleConfirmMessage.bind(this)
  }

  render() {

    let confirmNode

    if (this.state.showConfirm) {
      return (
        <span>
          <a href="" onClick={this._confirmDelete}>Yes </a> - or - <a href="" onClick={this._toggleConfirmMessage}> No</a>
        </span>
      )
    } else {
      confirmNode = <a href="" onClick={this._toggleConfirmMessage}>Delete comment?</a>
    }

    return (
      <span>
        {confirmNode}
      </span>
    )
  }

  _toggleConfirmMessage(e) {
    e.preventDefault()

    this.setState({
      showConfirm: !this.state.showConfirm
    })

  }

  _confirmDelete(e) {
    e.preventDefault()
    this.props.onDelete()
  }
}

export default CommentRemoveConfirmation
