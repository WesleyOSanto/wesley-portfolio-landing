import './globals.css';

export const metadata = {
  title: 'Wesley Oliveira — Studio Pixel',
  description:
    'Portfólio de estudo de Wesley Oliveira, aluno do SENAC Salto — identidade visual Studio Pixel, front-end, UI e animação.',
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
