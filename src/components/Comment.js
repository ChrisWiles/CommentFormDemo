import React, {Component, PropTypes} from 'react'
import CommentRemoveConfirmation from './CommentRemoveConfirmation'

class Comment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isAbusive: false
    }
    this._handleDelete = this._handleDelete.bind(this)
    this._toggleAbuse = this._toggleAbuse.bind(this)
  }

  render() {

    let commentBody
    const {body, author, avatarUrl} = this.props

    if (!this.state.isAbusive) {
      commentBody = body
    } else {
      commentBody = <em>Content marked as abusive</em>
    }

    return(
      <div className="comment">

        <img src={avatarUrl} alt={`${author}'s`} />

        <p className="comment-header">{author}</p>
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

Comment.propTypes = {
  onDelete: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  avatarUrl:  PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  body: PropTypes.node.isRequired
}

export default Comment
