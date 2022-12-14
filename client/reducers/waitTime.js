import { UPDATE_WAIT_TIME, GET_WAIT_TIME } from '../actions/time'

const waitTimeReducer = (state = 3, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_WAIT_TIME:
      state = 3
      payload.forEach((element) => {
        if (element.order_status === 'in queue') {
          state += 3
        }
      })
      return state
    case UPDATE_WAIT_TIME:
      if (payload.order_status && payload.order_status === 'in queue') {
        return state + 3
      } else if (
        payload.order_status &&
        payload.order_status === 'order completed'
      ) {
        return state - 3
      } else {
        return state
      }
    default:
      return state
  }
}

export default waitTimeReducer
