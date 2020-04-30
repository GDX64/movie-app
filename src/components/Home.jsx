import React from 'react'
import axios from 'axios'
import config from './config'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    constructor() {
        super()
        this.state = { movieList: [] };
    }

    componentDidMount = () => {
        const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.apiKey}`

        axios.get(nowPlaying).then((response) => {
            this.setState({ movieList: response.data.results })
        })
    }

    render() {
        const movieList = this.state.movieList.map((movie, index) => {
            return (
                <div key={index} className="col s3">
                    <Link to={`/movie/${movie.id}`}>
                        <img src={`${config.imageUrl}${movie.poster_path}`} />
                    </Link>
                </div>

            )
        })

        return <div className="row home-div">
            {movieList}
        </div>
    }
}


export default Home