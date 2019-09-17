import React from 'react';
class Contact extends React.Component {
  state = {
    open: true,

    data: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch('http://localhost:4000/posts')
      .then(data => data.json())
      .then(data => this.setState({ data, loading: false }));
  }

  render() {
    return (
      <div>
        {this.state.data.map(user => {
          return (
            <div key={user.id}>
              <h4>Username : {user.username}</h4>
              <h4>Name : {user.Name}</h4>
              <h4>Email : {user.email}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Contact;
