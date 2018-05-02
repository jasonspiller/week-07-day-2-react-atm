import React, { Component } from 'react';

export default class Account extends Component {
	constructor(props){
		super(props)
		this.state = {
			balance: 0,
			name: this.props.name
		}
	}

	// const validateData = (input, operator) => {
	//
	// 	let value = parseInt(input);
	// 	let newBalance = 0;
	//
	// 	if (value >= 0) {
	//
	// 		if (operator === '-') {
	// 			// set a local variable to the new balance based off of the original balance + amount
	// 			let newBalance = this.state.balance - value;
	// 		} else {
	// 			// set a local variable to the new balance based off of the original balance + amount
	// 			let newBalance = this.state.balance + value;
	// 		}
	//
	// 		// set the balance to the newBalance using the setState method (necessary)
	// 		this.setState({
	// 			balance: newBalance,
	// 			name: this.props.name
	// 		})
	// 		// empty out the text box in this component
	// 		this.inputBox.value = '';
	// 	} else {
	// 		let warning = 'Please Enter a Number';
	// 		this.setState({
	// 			name: warning
	// 		})
	// 		this.inputBox.value = '';
	// 	}
	// }

	handleDepositClick(e) {
		// It is good practice to still prevent default behavior
		e.preventDefault();

		//validateData(this.inputBox.value, '+')

		// set a local variable to the amount entered in the text box.
		let amount = parseInt(this.inputBox.value);

		if (amount >= 0) {
			// set a local variable to the new balance based off of the original balance + amount
			let newBalance = this.state.balance + amount;
			// set the balance to the newBalance using the setState method (necessary)
			this.setState({
				balance: newBalance,
				name: this.props.name
			})
			// empty out the text box in this component
			this.inputBox.value = '';
		} else {
			let warning = 'Please Enter a Number';
			this.setState({
				name: warning
			})
			this.inputBox.value = '';
		}
	}

	handleWithdrawClick(e) {
		// It is good practice to still prevent default behavior
		e.preventDefault();

		//validateData(this.inputBox.value, '-')

		// set a local variable to the amount entered in the text box.
		let amount = parseInt(this.inputBox.value);

		if (amount >= 0) {
			// set a local variable to the new balance based off of the original balance + amount
			let newBalance = this.state.balance - amount;
			// set the balance to the newBalance using the setState method (necessary)
			this.setState({
				balance: newBalance,
				name: this.props.name
			})
			// empty out the text box in this component
			this.inputBox.value = '';
		} else {
			let warning = 'Please Enter a Number';
			this.setState({
				name: warning
			})
			this.inputBox.value = '';
		}
	}
  render() {
		// set the default class to `balance` for the balanceClass.
		let balanceClass = 'balance';
		// if the balance is 0, then add the class zero to balanceClass
		if (this.state.balance <= 0) {
			balanceClass += ' zero';
		}
    return (
      <div className="account">
        <h2>{this.state.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
        <input type="button" value="Deposit" onClick={(e) => this.handleDepositClick(e)} />
        <input type="button" value="Withdraw" onClick={(e) => this.handleWithdrawClick(e)} />
      </div>
    )
  }
}
