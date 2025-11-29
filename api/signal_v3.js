module.exports = async (req, res) => {
  res.status(200).json({ ok:true, direction: "NEUTRAL", confidence: 50, msg: "Minimal stub - replace with real signal_v3.js" });
};
