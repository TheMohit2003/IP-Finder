function getIP(req, res) {
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const ip = ipAddress.split(',')[0];
  return res.json({ ip });
}

module.exports = { getIP };
