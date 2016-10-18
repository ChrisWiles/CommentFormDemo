import React, {Component, PropTypes} from 'react'

class CommentAvatarList extends Component {
  render() {

    const { avatars = [] } = this.props;

    return (
      <div className="comment-avatars">
        <h4>Authors</h4>
        <ul>
          {avatars.map((avatarUrl, i) => (
            <li key={i}>
              <img src={avatarUrl} role="presentation" />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

CommentAvatarList.propTypes = {
  avatars: PropTypes.array.isRequired
}

export default CommentAvatarList
