import * as constants from "../constants"

export const widgetReducer = (state = {widgets: [], preview: false}, action) => {
	let newState
	switch (action.type) {

		// case constants.ORDER_WIDGETS:
		// 	let ordered
		// 	let index = 0
		//
		// 	while (state.widgets.length !== 0) {
		// 		for (let widget of state.widgets) {
		// 			if (widget.position === index) {
		// 				// ordered.add(Object.assign({}, widget))
		// 				ordered.add(widget)
		// 				let i = state.widgets.indexOf(widget);
		// 				state.widgets.splice(i, 1)
		// 				index += 1
		// 			}
		// 		}
		// 	}
		//
		// 	console.log(ordered)
		// 	return ordered

		case constants.SHIFT_WIDGET_UP:
			let originalOrder = state.widgets
			let position = action.position
			// is it possible to pass other widget properties like position?

			return state.widgets

		case constants.SHIFT_WIDGET_DOWN:
			return state.widgets

		case constants.LINK_TEXT_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.text = action.text
					}
					return Object.assign({}, widget)
				})
			}

		case constants.LINK_NAME_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.name = action.name
					}
					return Object.assign({}, widget)
				})
			}

		case constants.LINK_URL_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.url = action.url
					}
					return Object.assign({}, widget)
				})
			}

		case constants.IMAGE_NAME_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.name = action.name
					}
					return Object.assign({}, widget)
				})
			}

		case constants.IMAGE_URL_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.url = action.url
					}
					return Object.assign({}, widget)
				})
			}

		case constants.LIST_ORDER_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.ordered = action.ordered
					}
					return Object.assign({}, widget)
				})
			}

		case constants.LIST_NAME_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.name = action.name
					}
					return Object.assign({}, widget)
				})
			}

		case constants.LIST_TEXT_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.text = action.text
					}
					return Object.assign({}, widget)
				})
			}

		case constants.PARAGRAPH_TEXT_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.text = action.text
					}
					return Object.assign({}, widget)
				})
			}

		case constants.PARAGRAPH_NAME_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.name = action.name
					}
					return Object.assign({}, widget)
				})
			}

		case constants.HEADING_NAME_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.name = action.name
					}
					return Object.assign({}, widget)
				})
			}

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
					{
						id: state.widgets.length + 1,
						text: 'New widget',
						widgetType: 'Heading',
						size: 1,
						name: '',
						position: state.widgets.length
					}
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