import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions/index";
import WidgetContainer from '../components/Widget'

class WidgetList extends Component {
	constructor(props) {
		super(props)
		this.props.findAllWidgets()
	}

	render() {
		return(
			<div className="container-fluid">
				<h1>Widget List {this.props.widgets.length}</h1>
				<button hidden={this.props.previewMode}
				        onClick={this.props.save}
				        className="btn btn-success"
				        type="button">Save</button>
				<button onClick={this.props.preview} className="btn btn-info" type="button">Preview</button>

				<ul>
					{this.props.widgets.map(widget => (
						<WidgetContainer widget={widget} key={widget.id} preview={this.props.previewMode}/>
					))}
				</ul>

				<button onClick={this.props.addWidget} className="btn btn-primary" type="button">Add Widget</button>
			</div>
		)
	}
}

const stateToPropertiesMapper = (state) => ({
	widgets: state.widgets,
	previewMode: state.preview
})

const dispatchToPropsMapper = dispatch => ({
	findAllWidgets: () => actions.findAllWidgets(dispatch),
	addWidget: () => actions.addWidget(dispatch),
	save: () => actions.save(dispatch),
	preview: () => actions.preview(dispatch)
})

export const App = connect(stateToPropertiesMapper, dispatchToPropsMapper)(WidgetList)
