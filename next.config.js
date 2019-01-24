const withCSS = require("@zeit/next-css");
require("dotenv").config();
const path = require("path");
const Dotenv = require("dotenv-webpack");

/* Without CSS Modules, with PostCSS */
module.exports = withCSS(
    {
        serverRuntimeConfig: {
            // Will only be available on the server side
        },
        publicRuntimeConfig: {
            // Will be available on both server and client
            RESTURL_SPEAKERS_PROD:
                "https://www.siliconvalley-codecamp.com/rest/speakers/ps",
            RESTURL_SPEAKER_PROD:
                "https://www.siliconvalley-codecamp.com/rest/speaker",
            RESTURL_SESSIONS_PROD:
                "https://www.siliconvalley-codecamp.com/rest/sessions"
        },
        webpack(config, options) {
            config.plugins = config.plugins || [];
            config.plugins = [
                ...config.plugins,
                // Read the .env file
                new Dotenv({
                    path: path.join(__dirname, ".env"),
                    systemvars: true
                })
            ];
            return config;
        }
    }
);