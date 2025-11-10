/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração básica para garantir funcionamento na porta 3000
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
}

export default nextConfig