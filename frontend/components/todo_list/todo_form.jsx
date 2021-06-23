import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "", 
            body: "",
            done: false
        }
    }

    render() {
        return (
            <form action=""> 
                <label for="title">Title</label>
                <input type="text" name="title" id="title" value={this.state.title}/>
                <br />
                <label for="body">Body</label>
                <input type="text" name="body" id="body" value={this.state.body} />
                <br />
                <label for="true">True</label>
                <input type="radio" name="done" id="true" value={this.state.done} />
                <br />
                <label for="false">False</label>
                <input type="radio" name="done" id="false" value={this.state.done} />
                <br />
                <input type="submit" value="submit" />
            </form>
        )
    }
}

export default TodoForm;