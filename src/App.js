import React, { Component } from 'react';
import './App.css';
import './components/Fight.css';
import Fight from './components/Fight';
import FightLogs from './components/FightLogs';

export default class App extends Component {

    state = {
        heroOneHealth: 100,
        heroSecondHealth: 100,
        yourDamage: '',
        enemyDamage: '',
        testText: '',
        logs: [],
        healLogs: []
    };

    onAttack = (heroHealths) => {
        let newOneHealth = heroHealths.newOneHealth;
        let newSecondHealth = heroHealths.newSecondHealth;
        let yourDamage = heroHealths.damage2;
        let enemyDamage = heroHealths.damage1;

        this.state.logs.unshift({ yourDamage }, { enemyDamage });

        if( newOneHealth <= 0 ){
            newOneHealth = 0;
            alert('YOU LOSE')
        }
        if(newSecondHealth <= 0){
            newSecondHealth = 0;
            alert('YOU WIN')
        }

        this.setState({
            heroOneHealth: newOneHealth,
            heroSecondHealth: newSecondHealth,
            yourDamage: yourDamage,
            enemyDamage: enemyDamage,
        });
    };

    onHeal = (heal) => {
        let newOneHealthHealed = heal.newOneHealth;
        let healx = heal.heal;
        let enemyDamage = heal.damage2;

        if( newOneHealthHealed >= 100 ){
            newOneHealthHealed = 100;
        }

        if( newOneHealthHealed <= 0 ){
            newOneHealthHealed = 0;
            alert('YOU LOSE')
        }

        this.state.logs.unshift({ healx }, { enemyDamage });

        this.setState({
            heroOneHealth: newOneHealthHealed
        })
    };

    onRestart = (restore) => {
        alert('Restarted')
        this.setState({
            heroOneHealth: restore.restore,
            heroSecondHealth: restore.restore
        })
    };

    render(){
        return (
            <div className="App">
                <Fight onAttack={this.onAttack} onHeal={this.onHeal} onRestart={this.onRestart} heroOneHealth={this.state.heroOneHealth} heroSecondHealth={this.state.heroSecondHealth} />
                <FightLogs damages={this.state.logs} health={this.state.healLogs} />
            </div>
        );
    }
}
