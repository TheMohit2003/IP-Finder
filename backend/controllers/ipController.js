// ipController.js
/**
 * @description - it returns the ip Address from the incoming request
 */
function getIP(req, res) {
  return res.json({ ip: `${req.ip}` });
}

module.exports = { getIP };
