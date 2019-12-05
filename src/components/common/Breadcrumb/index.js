import React, { Component } from 'react';
import { Router, withRouter, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { breadcrumbItem } from 'constants';
import './style.less';

@withRouter
class LomaBreadcrumb extends Component {
	constructor(props) {
		super(props);
		this.state = {
			routes: []
		};
	}

	getRoutes = () => {
		let pathname = window.location.pathname.split('/');
		let routes = [{ path: '', breadcrumbName: '当前位置' }];
		switch (pathname[1]) {
			case 'home':
				routes.push({
					path: '/' + pathname[1],
					breadcrumbName: '首页'
				});
				break;
			default:
				routes.push({
					path: '/' + pathname[1],
					breadcrumbName: '首页'
				});
		}
		this.setState({ routes });
	};

	itemRender = (route, params, routes, paths) => {
		const last = routes.indexOf(route) === routes.length - 1;
		return last || !route.path ? (
			<span>{route.breadcrumbName}</span>
		) : (
			<Link to={route.path}>{route.breadcrumbName}</Link>
		);
	};

	UNSAFE_componentWillReceiveProps() {
		this.getRoutes();
	}

	componentDidMount() {
		this.getRoutes();
	}

	render() {
		// const { routes } = this.state;
		return (
			<div id={'lomaBlog-breadcrumb'}>
				<Breadcrumb
					itemRender={this.itemRender}
					routes={this.state.routes}
				/>
			</div>
		);
	}
}
export default LomaBreadcrumb;
