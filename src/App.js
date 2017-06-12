import React, { Component } from 'react';
import Header from './components/header/Header';
import IndexList from './components/current-octions/IndexList';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentItems: [],
            activePage: 1,
            limit: 5,
            offset: 0,
            totalPages: 0,
            count: 0,
            loaded: false
        }

    }

    componentWillMount() {
        this.loadCurrentItems(`${this.props.baseUrl}current-items.json?limit=${this.state.limit}&offset=0`)
    }


    loadCurrentItems(url) {
        fetch(url)
            .then(response => {
                return response.json()
            }).then(json => {

                let pages = Math.round(json.count / this.state.limit)

                this.setState({
                    currentItems: json.records,
                    totalPages: pages,
                    count: json.count,
                    loaded: true
                })

            }).catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="App">
                <Header />
                <IndexList currentItems={this.state.currentItems}/>
            </div>
        );
    }
}

export default App;
