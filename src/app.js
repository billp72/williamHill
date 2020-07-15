import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from 'react';
import './styles.css'

function App(props) {
    const [state, setState] = useState([])
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=new_york_yankees', {
            method:'get'
        }).then(response => {
            return response.json();
        }).then(json => {
            setState(json)
        })
    }, []); 
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            {(state.teams || []).map((item => 
                <div style={{width:'20%'}} key={item.idTeam.toString()}>
                    <h1><a target='_blank' href={`http://${item.strWebsite}`}>{item.strTeam}</a></h1>
                    <img style={{margin:'0 27%'}} width={100} src={item.strTeamBadge} alt="logo" />
                    <ul>
                        <li><a target='_blank' href={`https://${item.strTwitter}`}><img alt='twitter'/></a></li>
                        <li><a target='_blank' href={`https://${item.strFacebook}`}><img alt='facebook' /></a></li>
                        <li><a target='_blank' href={`https://${item.strInstagram}`}><img alt='instagram' /></a></li>
                    </ul> 
                    <hr />
                    <h2 style={{padding:'0 15%'}}>{item.strStadium}</h2>
                    <div className="Card">
                        <img style={{width:'99%'}} src={item.strStadiumThumb} alt='Yankee Stadium' />
                        <div style={{overflow:'hidden', width:'99%',height:'90px'}}><a href="">{item.strStadiumDescription}</a></div>
                    </div>
                    <h3 style={{padding:'0 30%'}}>League Info</h3>
                    <table>
                        <thead>
                            <th>
                                Manager
                            </th>
                            <th>
                                Formed
                            </th>
                            <th>
                                League
                            </th>
                            <th>
                                Sport
                            </th>
                            <th>
                                Short
                            </th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{item.strManager}</td>
                                <td>{item.intFormedYear}</td>
                                <td>{item.strLeague}</td>
                                <td>{item.strSport}</td>
                                <td>{item.strTeamShort}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}

export default hot(App);