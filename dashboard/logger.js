const fs = require('fs');
const path = require('path');

const FEED_FILE = path.join(__dirname, 'feed.json');

function writeUpdate() {
  const data = { timestamp: new Date().toISOString() };
  fs.writeFileSync(FEED_FILE, JSON.stringify(data, null, 2));
  console.log('Dashboard feed updated', data.timestamp);
}

writeUpdate();
setInterval(writeUpdate, 5 * 60 * 1000);
