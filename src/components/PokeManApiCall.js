import React, { Component } from 'react'
import axios from 'axios';
import PokeMan1 from './PokeMan1'
export default class PokeManApiCall extends Component {
    constructor(props) {
        super(props)

        this.state = {

            posts: []


        }
    }
    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(response => {
                console.log(response);
                console.log("workflow test 1")
                this.setState({ posts: response.data.results })
            })
            .catch(error => { console.log(error) })


    }
    render() {

        const { posts } = this.state
        return (
            <div>
                <PokeMan1 data={posts} />
            </div>
        )
    }
}

