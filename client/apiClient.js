import request from 'superagent'

export function submitOrder(order) {
  return request
    .post('/api/orders')
    .send(order)
    .then((res) => res.body)
}

export function getQueuedOrders() {
  return request.get('/api/orders/queued').then((res) => res.body)
}

export function updateOrder(newOrder) {
  return request
    .patch('/api/orders')
    .send(newOrder)
    .then((res) => res.body)
}

export function getStock() {
  return request.get('/api/stock').then((res) => res.body)
}

export function updateStock(updatedQuant) {
  return request
    .patch('/api/stock')
    .send(updatedQuant)
    .then((res) => res.body)
}
