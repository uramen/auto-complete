import React, {Component} from 'react';
import Mocksuggestions from './data.json';
import './SearchField.css';

class SearchField extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
      suggestions: []
    }

    this.searchInput = React.createRef();
  }

  handleChange = (event) => {
    const search = event.target.value

    this.setState({search})
    this.getsuggestions(search)
  }

  getsuggestions = async search => {
    if(search === '') {
      this.setState({suggestions: []})
      return
    }

    //In real world we get filtered data from backend.
    //Something like this:
    //const suggestions = await axios.get('/suggestions')
    const suggestions = Mocksuggestions.filter(suggestion => {
      return new RegExp('^' + search.toLowerCase()).test(suggestion.value.toLowerCase())
    })

    this.setState({suggestions})
  }

  chooseSugestation = suggestion => {
    this.setState({search: suggestion, suggestions: []}, () => {
      this.searchInput.current.focus()
    })
  }

  render() {
    return (
      <div className="search-field">
        <input type="text" value={this.state.search} onChange={this.handleChange} ref={this.searchInput}/>
        <div className="suggestions">
          {this.state.suggestions.map(suggestion =>
            <div className="item" key={`suggestions_${suggestion.id}`} onClick={e => this.chooseSugestation(suggestion.value)}>
              <span className="darker">{suggestion.value.slice(0, this.state.search.length)}</span>
              {suggestion.value.substr(this.state.search.length, suggestion.value.length)}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default SearchField;
