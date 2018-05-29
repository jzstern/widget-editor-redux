import '../node_modules/bootstrap/dist/css/bootstrap.css'

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {widgetReducer} from "./reducers/WidgetReducer";
import {App} from './containers/WidgetList'

let store = createStore(widgetReducer)

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)