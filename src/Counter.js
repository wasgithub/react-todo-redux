import React from 'react';
import { connect } from 'react-redux';


const Counter = (props) => (
    <h1>Você tem { props.todos.length } de Todos </h1>
);

const mapStateToProps = state => ({
    todos: state.todos
})


export default connect(mapStateToProps)(Counter)