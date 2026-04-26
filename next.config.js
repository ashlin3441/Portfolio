const prod = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: prod ? false : true,
});

const nextConfig = {
  turbopack: {},
};

module.exports = withPWA(nextConfig);
