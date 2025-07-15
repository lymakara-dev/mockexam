const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};
export const runtime = "edge";

module.exports = withNextIntl(nextConfig);
