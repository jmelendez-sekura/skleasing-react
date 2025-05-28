/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/skleasing-react",
    //output: "export",  // <=== enables static exports
    //reactStrictMode: true,
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    }
};

export default nextConfig;
