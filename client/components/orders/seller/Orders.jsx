import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { getAllOrders } from '../../../apiClient'

import { getOrdersThunk } from '../../../actions/orders'
import { getWaitTime } from '../../../actions/time'

import Order from './Order'

export default function Orders() {
  // const [orders, setOrders] = useState(null)
  const dispatch = useDispatch()
  const orders = useSelector((Reduxstore) => Reduxstore.orders)
  const waitTime = useSelector((Reduxstore) => Reduxstore.waitTime)

  useEffect(() => {
    dispatch(getOrdersThunk())
    dispatch(getWaitTime(orders))
  }, [orders])

  return (
    <div>
      <h1>Current wait time is {waitTime}</h1>
      <div className="flex flex-wrap">
        {orders &&
          orders.map((order) => <Order key={order.id} order={order} />)}
      </div>
    </div>
  )
}