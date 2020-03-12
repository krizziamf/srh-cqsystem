import React, { Component } from 'react';
import Header from '../component/Header';
import '../style/user.css';


class Cashier extends Component {
    constructor() {
        super()
        this.state = {
            count: 0

        };
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        }, 
        () => {
            console.log(this.state.count)
            } 
        )
    }
    render() {
        return(
            <div className="user-container">
                <div className="logout__div">
                        <a href="#" className="logout-btn">Logout</a>
                    </div>
                <form className="user-center"> 
                    <div className="cashier__title-div">
                    <h1 className="user__title">CASHIER</h1>
                    </div>
                    <h1 className="current-queue">CURRENT QUEUE</h1>
                    <h1 className="queue">{this.state.count}</h1>
                    <button className="add-btn" onClick={() => this.increment()}>ADD QUEUE</button>
                    <a href="#" className="reset-btn">Reset Queue</a>
                </form>
            </div>
        )
    }
}

export default Cashier;