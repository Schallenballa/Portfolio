const { buildManifest, watchManifest } = require('./generate-unreleased-manifest');

buildManifest();
const stopWatching = watchManifest();

process.once('exit', stopWatching);
process.once('SIGINT', () => {
    stopWatching();
    process.exit(0);
});
process.once('SIGTERM', () => {
    stopWatching();
    process.exit(0);
});

require('react-scripts/scripts/start');
