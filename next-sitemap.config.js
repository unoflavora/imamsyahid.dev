const NEXT_SSG_FILES = [
  "/*.json$",
  "/*_buildManifest.js$",
  "/*_middlewareManifest.js$",
  "/*_ssgManifest.js$",
  "/*.js$",
];

// add your private routes here
const exclude = ["/api*"];

/** @type {import('next-sitemap').IConfig} */
// extend the configuration
const config = {
  siteUrl: "https://www.imamsyahid.dev",
  generateRobotsTxt: true,
  exclude,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: NEXT_SSG_FILES,
      },
    ],
  },
};

module.exports = config;
