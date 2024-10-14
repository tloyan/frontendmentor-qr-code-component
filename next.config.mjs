/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: 'https://qr-code-component.tloyan.com',
    images: {
    //     remotePatterns: [
    //       {
    //         protocol: 'https',
    //         hostname: 'qr-code-component.tloyan.com',
    //         pathname: '/**'
    //       },
    //     ],
        domains: ['qr-code-component.tloyan.com']
    },
}
  

export default nextConfig;
