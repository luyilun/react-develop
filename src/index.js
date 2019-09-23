import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'whatwg-fetch'; //全局引入 fetch 方法类
// import registerServiceWorker from "./registerServiceWorker";
import Home from 'src/container/home';
import List from 'src/container/list';
import './index.less';

function App(){
	return (
		<BrowserRouter >
			<Switch>
				<Route exact path={'/'} component={Home} />
				<Route exact path={'/list'} component={List} />
			</Switch>
		</BrowserRouter>	
	);
}

ReactDom.render(<App/>, document.getElementById('root'));
// registerServiceWorker();