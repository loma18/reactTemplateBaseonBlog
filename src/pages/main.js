import React, { Component } from 'react';
import { Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { fireGetRequest } from 'service/app';
import './style.less';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	componentDidUpdate() {}

	componentDidMount() {
	}

	render() {
		return (
			<div id={'lomaBlog-main'}>
				main
			</div>
		);
	}
}
export default Main;
