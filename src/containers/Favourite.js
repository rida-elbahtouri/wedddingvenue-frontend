import React, { Component } from 'react'
import {connect} from 'react-redux'
import Axios from 'axios'
import Getvenues from '../actions'
import VenueCard from '../component/venueCard'
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types'
class Favourite extends Component {
   
    componentDidMount=()=>{
      

        const baseUrl = 'https://mighty-headland-70407.herokuapp.com';
        Axios.get(`${baseUrl}/favourites`,{ params: {
              id:parseInt(localStorage.getItem('user_id')) }
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
       
        console.log(this.props.venues)
        let result = null
        if (this.props.venues.length > 0) {
             result = this.props.venues.map(venue=>{
                        return (<VenueCard key={venue.id} addedToFav={true} venue={venue} />)
                    })
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

  Favourite.propTypes = {
    Getvenues: PropTypes.func.isRequired,
    // eslint-disable-next-line
    venues: PropTypes.array.isRequired,
  };

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
