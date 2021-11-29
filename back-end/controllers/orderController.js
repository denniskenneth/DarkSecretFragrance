import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

//PURPOSE:  Create new order
// ROUTE: POST /api/orders
// ACCESS: Private
const addOrderItems = asyncHandler(async (req, res) => {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body

    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order items')
        return
      } else {
        const order = new Order({
          orderItems,
          user: req.user._id,
          shippingAddress,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingPrice,
          totalPrice,
        })

        const createdOrder = await order.save()

        res.status(201).json(createdOrder)
  }
})

//PURPOSE:  Get order by ID
// ROUTE: GET/api/orders/:id
// ACCESS: Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  )

  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

//PURPOSE:  Update order to paid
// ROUTE: GET/api/orders/:id/pay
// ACCESS: Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isPaid = true
    order.paidAt = Date.now()
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address
    }

    const updateOrder = await order.save()
    
    res.jsom(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})
export { addOrderItems, getOrderById, updateOrderToPaid }