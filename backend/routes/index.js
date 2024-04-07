const fs = require('fs');
const path = require('path');

// Function to dynamically import routes from the current directory
function importRoutes() {
  const routes = [];
  const routeFiles = fs.readdirSync(__dirname);

  routeFiles.forEach(file => {
    if (file !== 'index.js' && file.endsWith('.js')) {
      const routePath = `./${file}`;
      const routeName = path.parse(file).name;
      const router = require(routePath);
      routes.push({ path: `/api/${routeName}`, router });
    }
  });

  return routes;
}

// Export the function directly
module.exports = importRoutes();
