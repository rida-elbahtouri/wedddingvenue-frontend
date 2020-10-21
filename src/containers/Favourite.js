import React, { Component } from 'react'
import {connect} from 'react-redux'
import Axios from 'axios'
import Getvenues from '../actions'
import VenueCard from '../component/venueCard'
import loading from '../assets/giphy.gif'
import { Redirect } from "react-router-dom";

class Favourite extends Component {
    constructor(props) {
        super(props)
        this.state = {
             venues:[]
        }
    }
    componentDidMount=()=>{
      

        const baseUrl = 'https://mighty-headland-70407.herokuapp.com/';
        Axios.get(`${baseUrl}/favourites`,{ params: {
              id:localStorage.getItem('user_id') }
        }).then(res => {
            const uniq = [...new Set(res.data.map(x=>x.id))].map(id=>{
                return res.data.find(s=>s.id===id)
                
            })
             this.props.Getvenues(uniq)
        });
    }
    renderHelper = ()=>{
        if (!localStorage.getItem('user_id')){
            return <Redirect to='/signup' />
        }
       

        let result = null
        if (this.props.venues.length > 0) {
             result = this.props.venues.map(venue=>{
                        return (<VenueCard key={venue.id} addedToFav={true} venue={venue} />)
                    })
        }else{
            result = (
                <img src={loading} alt="loading" />
            )
        }
       
        return result
        
    }
    render() {
        return (
            <div className="cardsList">
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
export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
