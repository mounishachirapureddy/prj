const User = require("../models/gamerModel");


exports.itemsCollected = async (req, res) => {
  try {
    const uid = req.query.uid;
    
    const user = await User.findById(uid);
    
    user.cart = user.cart +1 ;

    await user.save();

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).send({ msg: "Added To Cart Sucessfully" });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};



