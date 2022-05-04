import React from 'react';

class ReactSimpleForm extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        val:""
    }
    this.handleChange=this.handleChange.bind(this);
}
handleChange(e){
    this.setState({val: e.target.value});
}
    render() {
        return (<div>
        <h1>{this.state.val}</h1>
        <form>
                <input type="text"
                    value={this.state.val}
                    onChange={this.handleChange}  />
            </form>
            </div>)
    }

}

export default ReactSimpleForm;

//see this code is very clear and you see whats happening but its a lot of work just to do a form a lot of code for small task!