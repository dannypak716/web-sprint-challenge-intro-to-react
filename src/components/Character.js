import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledDetails = styled.div`
    text-align: center;
    background-color: darkorange;
    margin: 1% 30%;
    border-radius: 70px;
    color: white;
    opacity: .9;
    h2{
        color: black;
    }
    h3{
        color: black;
    }
    button{
        background-color: grey;
        color: white;
        margin-bottom: 2%;
        &:hover{
            background-color: black;
            color: white;
        }
    }
`



export default function Character(props){
    const {currentURL, close} = props;
    const [details, setDetails] = useState([]);
    const index = currentURL.slice(-2);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${index}`)
        .then(res => {
          setDetails(res.data);
        }).catch(err => console.log(err));
    }, [index])


    return(
        <StyledDetails>
            <h2>Details of {details.name}</h2>
            <h3>{details.name} was born in {details['birth_year']}</h3>
            <h4>Height: {details.height} <br></br> Weight: {details.mass}</h4>
            <p>Hair Color: {details['hair_color']} Skin Color: {details['skin_color']} Eye Color: {details['eye_color']}
            </p>
            <button onClick={close}>Close</button>
        </StyledDetails>
    )
}