import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  
  constructor() { 
    super()

    this.state = this.initialState()
  }
  initialState = () => ({name: '',  hp: '', frontUrl: '', backUrl: ''})

  hanndleInput = (e, {name, value} ) => this.setState({ [name]: value } ) // special function pass from inputs
 
  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },body: JSON.stringify({
        name: this.state.name,
        hp: this.state.hp,
        sprites: {front: this.state.frontUrl, back: this.state.backUrl}
    })
   })  .then(res => res.json())
       .then(pokemon => this.props.addPoke(pokemon))
       this.setState(this.initialState())
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input 
            fluid onChange={this.hanndleInput} label="Name" placeholder="Name" name="name" value={this.state.name}  />
            <Form.Input 
            fluid onChange={this.hanndleInput}  label="hp" placeholder="hp" name="hp" value={this.state.hp}  />
            <Form.Input 
            fluid onChange={this.hanndleInput}label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl}/>
            <Form.Input 
            fluid onChange={this.hanndleInput} label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
