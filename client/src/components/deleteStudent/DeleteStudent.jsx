import React, { Component } from 'react';
import NavigationButtons from '../../common/NavigationButton';
import './deleteStudent.css';

class DeleteStudent extends Component {

    componentDidMount = () => {

        this.props.fetchStudents();
    };

    displayUsers = (users) => {

        return users.map((user, index) => (
            <div key={index} className='users'>
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Username: {user.username}</p>
                </div>

                <button className='btn'>Delete</button>
            </div>
        ));
    };
    render() {
        const { users, navigate } = this.props;

        return (
            <div className='delete-students'>
                <h2>Delete Student</h2>
                {this.displayUsers(users)}

                <NavigationButtons navigate={navigate} url={'/home'} />
            </div>
        );
    }
};

export default DeleteStudent;