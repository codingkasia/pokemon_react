import React from 'react'

class PokemonListItem extends React.Component {

    constructor() {
        super()
        this.state = {
            flipCardView: 'true'
        }
    }
    updateButtonView = () => {
        this.setState({flipCardView: !this.state.flipCardView})
    }

    render() {
            return <div>
                {this.props.pokemon.name}
                <button onClick={this.updateButtonView}>{!this.state.flipCardView ? "Show Front" : "Show Back"}
                    </button>
                {this.state.flipCardView ? <img alt={this.props.pokemon.name} src={this.props.pokemon.sprites.front} /> : <img alt={this.props.pokemon.name} src={this.props.pokemon.sprites.back} />}
              </div>;
    }
}
export default PokemonListItem
