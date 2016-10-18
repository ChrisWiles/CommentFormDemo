import React, {Component, PropTypes} from 'react'

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
    if (this.state.showConfirm) {
      return (
        <span>
          <a href="" onClick={this._confirmDelete}>Yes </a> - or - <a href="" onClick={this._toggleConfirmMessage}> No</a>
        </span>
      )
    } else {
      return (
        <span>
          <a href="" onClick={this._toggleConfirmMessage}>Delete comment?</a>
        </span>
      )
    }
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

CommentRemoveConfirmation.propTypes = {
  onDelete: PropTypes.func.isRequired
}

export default CommentRemoveConfirmation
