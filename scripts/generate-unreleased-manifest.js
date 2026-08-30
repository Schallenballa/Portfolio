const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const audioDirectory = path.join(projectRoot, 'public', 'audio', 'unreleased');
const generatedDirectory = path.join(projectRoot, 'src', 'generated');
const manifestPath = path.join(generatedDirectory, 'unreleasedTracks.js');

const buildManifest = () => {
    fs.mkdirSync(audioDirectory, { recursive: true });
    fs.mkdirSync(generatedDirectory, { recursive: true });

    const tracks = fs.readdirSync(audioDirectory, { withFileTypes: true })
        .filter((entry) => entry.isFile() && /\.m4a$/i.test(entry.name))
        .map((entry) => `/audio/unreleased/${encodeURIComponent(entry.name)}`)
        .sort((first, second) => first.localeCompare(second));

    const contents = `// This file is generated from public/audio/unreleased. Do not edit it manually.\nconst unreleasedTracks = ${JSON.stringify(tracks, null, 4)};\n\nexport default unreleasedTracks;\n`;
    const existingContents = fs.existsSync(manifestPath) ? fs.readFileSync(manifestPath, 'utf8') : '';

    if (existingContents !== contents) {
        fs.writeFileSync(manifestPath, contents);
        console.log(`Updated unreleased audio catalog (${tracks.length} ${tracks.length === 1 ? 'clip' : 'clips'}).`);
    }

    return tracks;
};

const watchManifest = () => {
    let debounceTimer;
    const watcher = fs.watch(audioDirectory, () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(buildManifest, 100);
    });

    return () => {
        clearTimeout(debounceTimer);
        watcher.close();
    };
};

if (require.main === module) buildManifest();

module.exports = { buildManifest, watchManifest };
