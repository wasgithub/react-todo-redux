import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from './actions/todos'


class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newTodoText: ''
        }

        console.log(props);
    }

    addTodo = ()  => {
        this.props.addTodo(this.state.newTodoText)
        this.setState({newTodoText: ''})
    }

    cleanTodos = () => {
        this.props.cleanTodos();
    }
    
    render() {
        return(
            <>
                <ul>
                    {
                        this.props.todos.map( todo => {
                            return(
                                <li key={ todo.id }>{ todo.text }</li>
                            )
                        })
                    }
                </ul>
                <input 
                    type= 'text'
                    name='todo'
                    value={this.state.newTodoText}
                    onChange={ (e) => this.setState({ newTodoText: e.target.value })} />
                <button onClick={ this.addTodo }>Novo Todo</button>
                <button onClick={ this.cleanTodos }>Limpar Todos</button>
            </>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(todoActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);