// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig


module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack: (config, options) => {
    config.resolve.alias.canvas = false;

    config.module.rules.push({
      test: /\.pdf$/i,
      type: 'asset/source'
  })

    
    return config;
 },
};


// module.exports = {
// 	images: {
// 		domains: ['cdn.sanity.io'],
// 		// loader: 'custom'
// 	}
// };