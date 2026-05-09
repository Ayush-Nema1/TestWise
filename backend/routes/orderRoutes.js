// routes/orderRoutes.js

const express = require("express");

const router = express.Router();

const {
  createOrder,
  acceptOrder,
  getSingleOrder,
  getUserOrders,
  getLabOrders,
  completeOrder,
  cancelOrder,
  markCommissionPaid,
} = require("../controllers/order.controllers");

// CREATE ORDER

router.post(
  "/create",
  createOrder
);

// ACCEPT ORDER

router.get(
  "/accept/:token",
  acceptOrder
);

// GET SINGLE ORDER

router.get(
  "/:order_id",
  getSingleOrder
);

// GET USER ORDERS

router.get(
  "/user/:user_id",
  getUserOrders
);

// GET LAB ORDERS

router.get(
  "/lab/:lab_id",
  getLabOrders
);

// COMPLETE ORDER

router.put(
  "/complete/:order_id",
  completeOrder
);

// CANCEL ORDER

router.put(
  "/cancel/:order_id",
  cancelOrder
);

// MARK COMMISSION PAID

router.put(
  "/commission-paid/:order_id",
  markCommissionPaid
);

module.exports = router;