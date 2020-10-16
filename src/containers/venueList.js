import React, { Component } from 'react'
import {connect} from 'react-redux'
import Axios from 'axios'
import Getvenues from '../actions'
import VenueCard from '../component/venueCard'


class VenueList extends Component {
    constructor(props) {
        super(props)
        this.state = {
             venues:[]
        }
    }
    componentDidMount=()=>{
        const baseUrl = 'https://mighty-headland-70407.herokuapp.com/';
        Axios.get(`${baseUrl}/weddingvenues`).then(res => {
             this.props.Getvenues(res.data)
        });
    }
    renderHelper = ()=>{
        console.log( this.props)
        let result = this.props.venues.map(venue=>{
            return (<VenueCard venue={venue} />)
        })
        return result
        
    }
    render() {
        return (
            <div>
               {this.renderHelper()}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    venues: state.venues,
  });

  const mapDispatchToProps = dispatch => ({
    Getvenues: data => {
      dispatch(Getvenues(data));
    },
  });
export default connect(mapStateToProps, mapDispatchToProps)(VenueList);
