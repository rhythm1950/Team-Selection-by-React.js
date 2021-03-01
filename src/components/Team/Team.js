import React, { useEffect, useState } from 'react';
import data from '../../data/data.json';
import Cricketers from '../Cricketers/Cricketers';
import Selection from '../Selection/Selection';
import './Team.css';

//use of fakeData 

const Team = () => {
    const [players, setPlayers] = useState(data);
    const [team, setTeam] = useState([]);
    const [fakedata, setFakeData] = useState([]);
    useEffect(() => {
        setFakeData(data);
    }, [])

    const handleSelectButton = (cricketer) => {
        const newTeam = [...team, cricketer];
        setTeam(newTeam);
    }

    return (
        <div className="full-info-div">
            <div className="single-player-info">
                {
                    players.map(player => <Cricketers handleSelectButton={handleSelectButton} cricketer={player}></Cricketers>)
                }
            </div>
            <div className="selected-team-info">
                <Selection team={team}></Selection>
            </div>
        </div>
    );
};

export default Team;