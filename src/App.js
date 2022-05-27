import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import { render } from '@testing-library/react';
import Timer from './Timer';


export default class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			isFirstTimerActive: false,
			isSecondTimerActive: false
		}

		this.isGameStarted = false;
	}
	render() {
		return (
			<div className="App m-5">
				<button className='btn btn-success mb-3'
					onClick={() => {
						if (!this.isGameStarted) {
							this.isGameStarted = true;
							this.setState({
								isFirstTimerActive: true
							})
						}

					}}>Начать игру
				</button>
				<div className="row timer p-3">
					<div className='col'>
						<h5>Игрок 1</h5>
						<Timer minutes={90}
							isActive={this.state.isFirstTimerActive}
							callback={() => {
								this.setState({
									isFirstTimerActive: false,
									isSecondTimerActive: true
								})
							}}
							className="p-5" />
					</div>
					<div className='col'>
						<h5>Игрок 2</h5>
						<Timer minutes={90}
							isActive={this.state.isSecondTimerActive}
							callback={() => {
								this.setState({
									isFirstTimerActive: true,
									isSecondTimerActive: false
								})
							}}
							className="p-5" />
					</div>

				</div>
				<button className='btn btn-danger mt-3'
					onClick={() => {
						if (this.isGameStarted) {
							this.isGameStarted = false;
							this.setState({
								isFirstTimerActive: false,
								isSecondTimerActive: false
							});
						}

					}}>Стоп
				</button>
			</div>
		);

	}


}

