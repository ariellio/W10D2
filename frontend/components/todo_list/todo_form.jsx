import React from 'react';
// import {receiveTodo} from '.././todo_actions';
// / actions / todo_actions.js

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "", 
            body: "",
            done: false
        }

        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.updateDone = this.updateDone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTitle(e) {
        this.setState({ title: e.target.value });
    }

    updateBody(e) {
        this.setState({ body: e.target.value });
    }

    updateDone(e) {
        this.setState({ done: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const todo = Object.assign({}, this.state, { id: Math.floor(Math.random() * 1000) });
        this.props.receiveTodo(todo);
    }


    render() {
        
        return (
            <form onSubmit={this.handleSubmit}> 
                <h1>Add ToDo</h1>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title"  onChange={this.updateTitle} value={this.state.title}/>
                <br />
                <label htmlFor="body">Body</label>
                <input type="text" name="body" id="body" onChange={this.updateBody} value={this.state.body} />
                <br />
                <label htmlFor="true">True</label>
                <input type="radio" name="done" id="true" onChange={this.updateDone} value={this.state.done} />
                <br />
                <label htmlFor="false">False</label>
                <input type="radio" name="done" id="false" onChange={this.updateDone} value={this.state.done} />
                <br />
                <button> Add Todo </button>
            </form>
        )
    }
}

export default TodoForm;