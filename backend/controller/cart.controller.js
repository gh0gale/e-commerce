// import Cart from "../model/cart.model.js";

// export const getCart = async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ userId: req.user.id }).populate(
//       "items.productId"
//     );
//     res.status(200).json(cart || { items: [] });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch cart" });
//   }
// };

// export const addToCart = async (req, res) => {
//   const { productId } = req.body;
//   try {
//     let cart = await Cart.findOne({ userId: req.user.id });

//     if (!cart) {
//       cart = new Cart({
//         userId: req.user.id,
//         items: [{ productId, quantity: 1 }],
//       });
//     } else {
//       const item = cart.items.find((i) => i.productId.equals(productId));
//       if (item) {
//         item.quantity += 1;
//       } else {
//         cart.items.push({ productId, quantity: 1 });
//       }
//     }

//     await cart.save();
//     res.status(200).json(cart);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to update cart" });
//   }
// };

import Cart from "../model/cart.model.js";

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id }).populate(
      "items.productId"
    );

    if (!cart) {
      return res.status(200).json({ items: [] });
    }

    // Format cart items to include name, price, quantity, etc.
    const formattedItems = cart.items.map((item) => ({
      _id: item._id,
      productId: item.productId._id,
      name: item.productId.name,
      price: item.productId.price,
      quantity: item.quantity,
    }));

    res.status(200).json({ items: formattedItems });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch cart" });
  }
};

export const addToCart = async (req, res) => {
  const { productId } = req.body;

  try {
    let cart = await Cart.findOne({ userId: req.user.id }).populate(
      "items.productId"
    );

    if (!cart) {
      cart = new Cart({
        userId: req.user.id,
        items: [{ productId, quantity: 1 }],
      });
    } else {
      const item = cart.items.find((i) => i.productId._id.equals(productId) || i.productId.equals(productId));
      if (item) {
        item.quantity += 1;
      } else {
        cart.items.push({ productId, quantity: 1 });
      }
    }

    await cart.save();
    await cart.populate("items.productId");

    // Format cart items again
    const formattedItems = cart.items.map((item) => ({
      _id: item._id,
      productId: item.productId._id,
      name: item.productId.name,
      price: item.productId.price,
      quantity: item.quantity,
    }));

    res.status(200).json({ items: formattedItems });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update cart" });
  }
};
