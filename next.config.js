/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "https://f-gaga.prismic.io/documents/working?l=hr",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
