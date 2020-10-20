import React,{Component} from 'react'
import { Redirect} from "react-router-dom";
import Axios from 'axios'
import {connect} from 'react-redux'
import {GetDetails} from '../actions'
import loading from '../assets/giphy.gif'
import addTofavourie from '../functions/addTofavourite'
class VenueDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id:null
        }
      
    }
    
    componentDidMount=()=>{
        if (localStorage.getItem('user_id')){
         this.setState({user_id:parseInt(localStorage.getItem('user_id'))})
     }
        const baseUrl = 'https://mighty-headland-70407.herokuapp.com/';
Axios.get(`${baseUrl}/weddingvenues/${this.props.match.params.id}`).then(res => {
    this.props.GetDetails(res.data)
});
    }
    
       
     
     renderHelper=()=>{
        if (!localStorage.getItem('user_id')){
            return <Redirect to='/signup' />
         }
        if( this.props.venueDetails ){
            const venue = this.props.venueDetails
            return (
                <div>
                    <img src={venue.photo} alt={venue.name} />
                   <h2> {venue.name} </h2>
                   <h2> {venue.price} </h2>
                   <p>{venue.description} </p>
                   <button onClick={()=>{addTofavourie(this.state.user_id,venue.id)}}>Add to favourite</button>
                </div>
            )
        }
     }
 
     render(){
         return (
     <div>
        {  this.renderHelper()}
     </div>
    )
     }
    
}

const mapStateToProps = state => ({
    venueDetails: state.venue_details,
  });

  const mapDispatchToProps = dispatch => ({
    GetDetails: data => {
      dispatch(GetDetails(data));
    },
  });
export default connect(mapStateToProps, mapDispatchToProps)(VenueDetails);