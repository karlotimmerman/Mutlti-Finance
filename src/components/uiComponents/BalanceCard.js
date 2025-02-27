
// internal imports
import React, {Component} from 'react';

// user imports
import '../../css/uiComponents/BalanceCard.css';

import Button from '../uiComponents/Button';

const balanceCard = ({account, editable}) => {

    // compute goal percentage and adjust var
    let aboveGoal = false;

    return(
        <div className="card">
            <h2>{account.name}</h2>
            <h1>{account.balance}</h1>
            <div className="graph"></div>
            <p className={aboveGoal ? "above" : "below"}>3% {aboveGoal ? "above" : "below"} goal</p>
            <p className={account.priority ? "priority" : ""}>{account.priority ? "PR" : ""}</p>
            <Button buttonStyle="recentTrans" className="recentTrans" >Recent transactions</Button>
        </div>
    );

};

export default balanceCard;