import React, { Component } from 'react';

export default class FightLogs extends Component {
    render(){

        console.log(this.props.health);

        const logs = this.props.damages && this.props.damages.map( (logs, i) => {
            if( logs.yourDamage ){
                return(
                    <div className="logs logs-your" key={i}>
                        <span>Verdiğin Hasar{logs.yourDamage}</span>
                    </div>
                )
            }
            if( logs.healx ){
                return(
                    <div className="logs logs-heal" key={i}>
                        <span>İyileştirilen Casssn{logs.healx}</span>
                    </div>
                )
            }
            if( logs.enemyDamage ){
                return(
                    <div className="logs logs-enemy" key={i}>
                        <span>Aldığın Hasar{logs.enemyDamage}</span>
                    </div>
                )
            }
        });

        return(
            <div className="fight-logs">
                {logs}
            </div>
        )
    }
}