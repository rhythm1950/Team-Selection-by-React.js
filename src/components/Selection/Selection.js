import './Selection.css';
import React from 'react';

// name, number of players selected and their total salary is displayed 

const Selection = (props) => {
    const team = props.team;
    const total = team.reduce((total, plr) => total + plr.salary, 0)
    const playerName = team.reduce((playerName, plr) => playerName + plr.name + ', ', "")

    return (
        <div className="selected-team">
            <h2>Selected Team</h2>
            <p>Players Selected: {team.length}</p>
            <p>Total Salary: ${total}</p>
            <p>Players List: {playerName}</p>
            {/* use of bootstrap class */}
            <button type="button" class="btn btn-success">Confirm</button><br /><br />
            <div class="alert alert-primary" role="alert">
                Your Team Is Ready To Go!
            </div>
        </div>
    );
};

export default Selection;