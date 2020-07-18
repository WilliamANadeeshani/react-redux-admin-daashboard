import React from 'react';
import {connect} from "react-redux";

class Users extends React.Component {

    render(){
        return <h1>Users List</h1>
    }
}

const mapStateToProps = () => {
    return {

    }
};

const matchDispatchToProps = {

};

export default connect(mapStateToProps, matchDispatchToProps)(Users)