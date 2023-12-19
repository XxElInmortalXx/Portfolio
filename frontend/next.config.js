/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    nextConfig,
    images: {
        domains: [process.env.NEXT_PUBLIC_BACKEND_URL_FOR_IMG, 'frontend-portfolio-andres-eduardo-rosas-alpiris-projects.vercel.app'],
    }
}
