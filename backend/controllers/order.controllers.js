

const crypto = require("crypto");

const Order = require("../model/Order");
const Lab = require("../model/Lab");
const LabTestPricing = require("../model/LabTestPrice");

// CREATE ORDER

const createOrder = async (req, res) => {
  try {

    const {
      user_id,
      lab_id,
      test_id,
      lab_test_pricing_id,

      patient_name,
      patient_phone,

      address,
      city,
      pincode,

      sample_collection_date,
      sample_collection_time,
    } = req.body;

    // VALIDATE PRICING

    const pricing =
      await LabTestPricing
        .findById(lab_test_pricing_id)
        .populate("lab_id")
        .populate("test_id");

    if (!pricing) {
      return res.status(404).json({
        success: false,
        message: "Pricing not found",
      });
    }

    // FINAL PRICE

    const final_price =
      pricing.discounted_price ||
      pricing.price;

    // COMMISSION
    // 10% example

    const commission =
      Math.round(final_price * 0.10);

    // UNIQUE ORDER ID

    const order_id =
      "TW-" + Date.now();

    // ACCEPT TOKEN

    const accept_token =
      crypto
        .randomBytes(20)
        .toString("hex");

    // CREATE ORDER

    const order =
      await Order.create({

        order_id,

        user_id,

        lab_id,

        test_id,

        lab_test_pricing_id,

        test_name:
          pricing.test_id.name,

        lab_name:
          pricing.lab_id.name,

        booking_price:
          final_price,

        patient_name,

        patient_phone,

        address,

        city,

        pincode,

        sample_collection_date,

        sample_collection_time,

        accept_token,

        commission_amount:
          commission,
      });

    // WHATSAPP MESSAGE

    const message = `
New TestWise Booking

Booking ID: ${order.order_id}

Test: ${order.test_name}

Price: ₹${order.booking_price}

Area: ${order.city}

Collection Time:
${sample_collection_time}

Accept Booking:
https://testwise.in/accept/${accept_token}
`;

    // WHATSAPP URL

    const whatsapp_redirect_url =
      `https://wa.me/${pricing.lab_id.phone}?text=${encodeURIComponent(message)}`;

    // SAVE URL

    order.whatsapp_redirect_url =
      whatsapp_redirect_url;

    order.order_status =
      "sent_to_lab";

    await order.save();

    res.status(201).json({
      success: true,
      message:
        "Order created successfully",

      data: order,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ACCEPT ORDER

const acceptOrder = async (req, res) => {
  try {

    const token =
      req.params.token;

    // FIND ORDER

    const order =
      await Order.findOne({
        accept_token: token,
      });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Invalid token",
      });
    }

    // ALREADY ACCEPTED

    if (
      order.order_status ===
      "accepted"
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Order already accepted",
      });
    }

    // UPDATE

    order.order_status =
      "accepted";

    order.accepted_at =
      new Date();

    order.commission_locked =
      true;

    await order.save();

    res.status(200).json({
      success: true,
      message:
        "Order accepted successfully",

      // USER DETAILS NOW VISIBLE

      patient_details: {

        patient_name:
          order.patient_name,

        patient_phone:
          order.patient_phone,

        address:
          order.address,

        city:
          order.city,

        pincode:
          order.pincode,
      },
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// GET SINGLE ORDER

const getSingleOrder =
  async (req, res) => {
    try {

      const order_id =
        req.params.order_id;

      const order =
        await Order.findOne({
          order_id,
        });

      if (!order) {
        return res.status(404).json({
          success: false,
          message:
            "Order not found",
        });
      }

      res.status(200).json({
        success: true,
        data: order,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

// GET USER ORDERS

const getUserOrders =
  async (req, res) => {
    try {

      const user_id =
        req.params.user_id;

      const orders =
        await Order.find({
          user_id,
        }).sort({
          createdAt: -1,
        });

      res.status(200).json({
        success: true,
        count: orders.length,
        data: orders,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

// GET LAB ORDERS

const getLabOrders =
  async (req, res) => {
    try {

      const lab_id =
        req.params.lab_id;

      const orders =
        await Order.find({
          lab_id,
        }).sort({
          createdAt: -1,
        });

      res.status(200).json({
        success: true,
        count: orders.length,
        data: orders,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

// COMPLETE ORDER

const completeOrder =
  async (req, res) => {
    try {

      const order_id =
        req.params.order_id;

      const order =
        await Order.findOne({
          order_id,
        });

      if (!order) {
        return res.status(404).json({
          success: false,
          message:
            "Order not found",
        });
      }

      order.order_status =
        "completed";

      await order.save();

      res.status(200).json({
        success: true,
        message:
          "Order completed",
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

// CANCEL ORDER

const cancelOrder =
  async (req, res) => {
    try {

      const order_id =
        req.params.order_id;

      const order =
        await Order.findOne({
          order_id,
        });

      if (!order) {
        return res.status(404).json({
          success: false,
          message:
            "Order not found",
        });
      }

      order.order_status =
        "cancelled";

      await order.save();

      res.status(200).json({
        success: true,
        message:
          "Order cancelled",
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

// MARK COMMISSION PAID

const markCommissionPaid =
  async (req, res) => {
    try {

      const order_id =
        req.params.order_id;

      const order =
        await Order.findOne({
          order_id,
        });

      if (!order) {
        return res.status(404).json({
          success: false,
          message:
            "Order not found",
        });
      }

      order.commission_status =
        "paid";

      order.commission_paid_at =
        new Date();

      await order.save();

      res.status(200).json({
        success: true,
        message:
          "Commission marked paid",
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

module.exports = {
  createOrder,
  acceptOrder,
  getSingleOrder,
  getUserOrders,
  getLabOrders,
  completeOrder,
  cancelOrder,
  markCommissionPaid,
};