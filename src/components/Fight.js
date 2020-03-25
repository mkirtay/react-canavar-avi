import React, { Component } from 'react';

export default class Fight extends Component{
    onAttack(){
        let damage1 = Math.floor( Math.random() * (17 - 5) + 5 );
        let damage2 = Math.floor( Math.random() * (17 - 5) + 5 );

        let newOneHealth = this.props.heroOneHealth - damage1;
        let newSecondHealth = this.props.heroSecondHealth - damage2;

        this.props.onAttack({
            newOneHealth, newSecondHealth, damage1, damage2
        });

    }

    onHeal(){
        let heal = Math.floor( Math.random() * (17 - 1) + 1 );
        let damage2 = Math.floor( Math.random() * (17 - 5) + 5 );

        let newOneHealth = this.props.heroOneHealth + heal - damage2;


        this.props.onHeal({
            newOneHealth, heal, damage2
        })
    }

    onRestart(){
        const restore = 100;

        this.props.onRestart({
            restore
        })
    }

    render(){
        return(
            <div>
                <div className="hero-wrapper">
                    <div className="hero-body-wrapper">
                        <span>YOU</span>
                        <div className="hero-body">
                            <div style={ { width: this.props.heroOneHealth + '%' } } className="hero-health-bar"></div>
                            <span className="health">{this.props.heroOneHealth + '%'}</span>
                        </div>
                    </div>
                    <div className="hero-body-wrapper">
                        <span>ENEMY</span>
                        <div className="hero-body hero-body--enemy">
                            <div style={ { width: this.props.heroSecondHealth + '%' } } className="hero-health-bar"></div>
                            <span className="health">{this.props.heroSecondHealth + '%'}</span>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button className="button button--attack" onClick={this.onAttack.bind(this)}>Attack</button>
                    <button className="button button--heal" onClick={this.onHeal.bind(this)}>Heal</button>
                    <button className="button button--grey" onClick={this.onRestart.bind(this)}>Restart</button>
                </div>
            </div>
        )
    }
}