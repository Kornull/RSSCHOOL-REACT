import React, { Component } from 'react';

import imageDefault from '../../../image/19.jpeg';

type UserProps = {
  images?: string;
};

class UserCards extends Component<UserProps> {
  constructor(props: UserProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={this.props.images ? this.props.images : imageDefault} alt="card image" />
      </div>
    );
  }
}

export default UserCards;
