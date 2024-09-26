/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = withPWA({
  compiler: {
    styledComponents: true
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
});

export default nextConfig;
