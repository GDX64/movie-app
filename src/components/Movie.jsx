import React from 'react'
import axios from 'axios'
import config from './config'

class Movie extends React.Component {
    constructor() {
        super()
        this.state = { movieData: '' }
        this.firstTime = true;
    }

    componentDidMount = () => {
        const url = `https://api.themoviedb.org/3/movie/${this.props.match.params.movieID}?api_key=${config.apiKey}`;
        axios.get(url).then((response) => {
            console.log(url, response);
            this.setState({ movieData: response.data })
        })
        this.firstTime = false
    }

    render() {
        if (this.firstTime) {
            return <h1>Loading...</h1>
        }

        return <div className="row center singleMovie">
            <img src={`${config.imageUrl}${this.state.movieData.poster_path}`} />
            <h3>{this.state.movieData.title}</h3>
            <p>{this.state.movieData.overview}</p>
        </div >
    }
}

export default Movie