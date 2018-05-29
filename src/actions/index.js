import * as constants from "../constants";

// export const deleteWidget = (dispatch, widgetId) => (
// 	dispatch({
// 		type: constants.DELETE_WIDGET,
// 		id: widgetId
// 	})
// )

// export const selectWidgetType = (dispatch, widgetId, widgetType) => (
// 	dispatch({
// 		type: constants.SELECT_WIDGET_TYPE,
// 		id: widgetId,
// 		widgetType: widgetType
// 	})
// )

export const headingTextChanged = (dispatch, widgetId, newText) => (
	dispatch({
		type: constants.HEADING_TEXT_CHANGED,
		id: widgetId,
		text: newText
	})
)

export const headingSizeChanged = (dispatch, widgetId, headingSize) => (
	dispatch({
		type: constants.HEADING_SIZE_CHANGED,
		id: widgetId,
		size: headingSize
	})
)

export const findAllWidgets = dispatch => {
	fetch('http://localhost:8080/api/widget')
		.then(response => (response.json()))
		.then(widgets => dispatch({
			type: constants.FIND_ALL_WIDGETS,
			widgets: widgets
		}))
}

export const addWidget = dispatch => {
	dispatch({type: constants.ADD_WIDGET})
}

export const save = dispatch => {
	dispatch({type: constants.SAVE})
}

export const preview = dispatch => {
	dispatch({type: constants.PREVIEW})
}