/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix:
        process.env.VERCEL_ENV === 'production' ?
            'https://qr-code-component.tloyan.com' : ''
  };
  

export default nextConfig;
