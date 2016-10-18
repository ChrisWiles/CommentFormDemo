import React, {Component} from 'react'
import CommentRemoveConfirmation from './CommentRemoveConfirmation'

class Comment extends Component {
  constructor() {
    super()

    this.state = {
      isAbusive: false
    }
    this._handleDelete = this._handleDelete.bind(this)
    this._toggleAbuse = this._toggleAbuse.bind(this)
  }

  render() {

    let commentBody

    if (!this.state.isAbusive) {
      commentBody = this.props.body
    } else {
      commentBody = <em>Content marked as abusive</em>
    }

    return(
      <div className="comment">

        <img src={this.props.avatarUrl} alt={`${this.props.author}'s`} />

        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">{commentBody}</p>

        <div className="comment-actions">
          <CommentRemoveConfirmation onDelete={this._handleDelete} />
          <a href="#" onClick={this._toggleAbuse}>Report as Abuse</a>
        </div>
      </div>
    )
  }

  _toggleAbuse(event) {
    event.preventDefault()

    this.setState({
      isAbusive: !this.state.isAbusive
    })
  }

  _handleDelete() {
    this.props.onDelete(this.props.id)
  }
}

export default Comment
