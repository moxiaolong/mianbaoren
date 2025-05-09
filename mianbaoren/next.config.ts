import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    distDir: 'out',
    experimental: {
        ppr: false,
    },
    output: 'export',
};

export default nextConfig;
