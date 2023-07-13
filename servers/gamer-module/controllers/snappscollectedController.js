const User = require("../models/gamerModel");


exports.snappsCollected = async (req, res) => {
  try {
    const { uid } = req.query;
    const pagenum = req.query.pagenum;
    const size = req.query.size;

    const user = await User.findById(uid);

    const skip = size * (pagenum - 1);
    const limit = parseInt(size);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    let gameslist = user.games.slice().reverse(); // Create a copy of the games array and reverse it

    const totalLength = gameslist.length; // Get the total length of the games array

    const gamesplayed = gameslist.slice(skip, skip + limit); // Get the subset of elements based on skip and limit

    res.status(200).json({ games: gamesplayed, total_counts: totalLength });
  } catch (error) {
    // Handle other errors that may occur during the execution
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
