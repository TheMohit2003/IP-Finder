function getIP(req, res) {
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  return res.json({ ip: ipAddress });
}

module.exports = { getIP };
