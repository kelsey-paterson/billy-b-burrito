import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import OrderForm from './OrderForm'
import { getWaitTime } from '../../../actions/time'
import { getAllOrders } from '../../../apiClient'

function Order() {
  const dispatch = useDispatch()
  const [hasOrdered, setHasOrdered] = useState(false)
  const waitTime = useSelector((Reduxstore) => Reduxstore.waitTime)

  useEffect(() => {
    getAllOrders()
      .then((orders) => {
        console.log(orders)
        dispatch(getWaitTime(orders))
      })
      .catch((err) => err.message)
  }, [])

  return (
    <div className="">
      {/* //TODO: dynamically populate wait time */}
      <h1 className="text-2xl text-center font-['Poor_Story']">
        Current Estimated Wait time is {waitTime} minutes
      </h1>
      {hasOrdered ? (
        <h3>
          Thank you for your order,<br></br>Your xx in the queue
        </h3>
      ) : (
        <OrderForm hasOrderedFunc={setHasOrdered} />
      )}
    </div>
  )
}

export default Order