/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname:"rueqqiubulvuiwhfhjcd.supabase.co"
          },
        ],
      },
};

export default nextConfig;
