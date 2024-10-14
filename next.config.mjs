/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix:
        process.env.NODE_ENV === 'production' ?
            'https://qr-code-component.tloyan.com' : ''
  };
  

export default nextConfig;
