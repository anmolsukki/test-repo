import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    const userData = [
      { user: 'Vipin', email: 'test@gmail.com' },
      { user: 'Deepak', email: 'test2@gmail.com' },
      { user: 'amit', email: 'test3@gmail.com' }
    ];

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {userData.map((user, index) => {
              return <div key={index}>{user.email}</div>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
