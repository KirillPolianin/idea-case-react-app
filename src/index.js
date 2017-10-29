import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import hardcodedArrayOfCategories from './hardcoded_array_of_categories';
import 'whatwg-fetch';

import CategoryItemAddForm from './components/category_item_add_form';
import CategoryList from './components/category_list';
import './style.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    }
  }

  categoryAdd(category) {
    fetch('http://proto372.haaga-helia.fi/50007/addcategory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(category)
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.log(err));

    this.setState({
      categories: [...this.state.categories, category]
    });
  }

//comment

  componentDidMount() {
    fetch('http://proto372.haaga-helia.fi/50007/categories')
    .then(response => response.json())
    .then(data => {
      this.setState({
        categories: data
      });
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <CategoryItemAddForm onFormSubmit={category => this.categoryAdd(category)} />
        <CategoryList categories={this.state.categories} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
