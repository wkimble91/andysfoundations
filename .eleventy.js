// importing a library to allow for easier date conversions (see line 14)
const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
    // allows css, assets, and CMS config files to be passed into /public
    eleventyConfig.addPassthroughCopy('./src/css/**/*.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy('.src/_redirects');
    // Put robots.txt in root
    eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });

    // watch CSS files for changes - doesn't trigger 11ty rebuild
    eleventyConfig.setBrowserSyncConfig({
        files: './public/css/**/*.css',
    });

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: 'public',
        },
        // allows .html files to contain nunjucks templating language
        htmlTemplateEngine: 'njk',
    };
};
