import * as constants from "../constants";

export const widgetReducer = (state = {widgets: [], preview: false}, action) => {
	let newState
	switch (action.type) {

		case constants.HEADING_SIZE_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.size = action.size
					}
					return Object.assign({}, widget)
				})
			}

		case constants.HEADING_TEXT_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.text = action.text
					}
					return Object.assign({}, widget)
				})
			}

		case constants.FIND_ALL_WIDGETS:
			newState = Object.assign({}, state)
			newState.widgets = action.widgets
			return newState

		case constants.SELECT_WIDGET_TYPE:
			let newState = {
				widgets: state.widgets.filter(widget => {
					if (widget.id === action.id) {
						widget.widgetType = action.widgetType
					}
					return true
				})
			}
			return JSON.parse(JSON.stringify(newState))

		case constants.ADD_WIDGET:
			return {
				widgets: [
					...state.widgets,
					{id: state.widgets.length + 1, text: 'new widget', widgetType: 'Paragraph', size: 2}
				]
			}

		case constants.DELETE_WIDGET:
			return {
				widgets: state.widgets.filter(widget => (
					widget.id !== action.id
				))
			}

		case constants.SAVE:
			fetch('http://localhost:8080/api/widget/save', {
				method: 'POST',
				body: JSON.stringify(state.widgets),
				headers: {'content-type': 'application/json'}
			})
			return state

		case constants.PREVIEW:
			newState = Object.assign({}, state)
			newState.preview = !state.preview
			return newState

		default:
			return state
	}
}