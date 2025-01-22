require('ignore-styles');
require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react']
});

const router = require('./App').default;
const Sitemap = require('react-router-sitemap').default;


new Sitemap(router)
    .build('https://zacharyschallenberger.com')
    .save('../public/sitemap.xml');
