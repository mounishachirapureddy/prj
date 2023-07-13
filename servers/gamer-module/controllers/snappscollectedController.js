const User = require("../models/gamerModel");


exports.snappsCollected = async (req, res) => {
  try {
    const { uid } = req.query;
    console.log(uid);
    const user = await User.findById(uid);

    console.log(user)

    if (!user) {
      
      return res.status(404).json({ error: "User not found" });
    }

    const games = user.games;
    console.log(games)
    res.status(200).json({ games });
  } catch (error) {
    // Handle other errors that may occur during the execution
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
