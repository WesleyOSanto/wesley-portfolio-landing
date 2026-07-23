import ColorBends from './ColorBends';
import PixelMark from './PixelMark';

const BRAND_COLORS = ['#1c7ab0', '#c77fb3', '#fbc93f', '#2d9a7e', '#f1864f'];

export default function Hero() {
  return (
    <header id="hero" className="hero">
      <div className="hero__bg">
        <ColorBends
          rotation={90}
          speed={0.18}
          colors={BRAND_COLORS}
          transparent={false}
          autoRotate={0}
          scale={1.1}
          frequency={1.2}
          warpStrength={1}
          mouseInfluence={1.1}
          parallax={0.5}
          noise={0.12}
          iterations={1}
          intensity={1.1}
          bandWidth={6}
        />
      </div>
      <div className="hero__bg-fade" aria-hidden="true" />
      <div className="hero__content">
        <p className="hero__badge">V1 · 10/25 · SENAC SALTO</p>
        <h1 className="hero__title">
          Identidade visual <PixelMark size="lg" /> aplicada em portfólio real.
        </h1>
        <p className="hero__subtitle">
          Sou Wesley Oliveira, designer gráfico e desenvolvedor front-end. Este site é meu
          portfólio de estudo do SENAC Salto — e também o case da identidade visual Studio Pixel,
          do manual de marca até as aplicações finais.
        </p>
        <div className="hero__actions">
          <a className="btn pixel-corners" href="https://www.behance.net/wesleysantos119" target="_blank" rel="noreferrer">
            Ver no Behance
          </a>
          <a className="btn btn--secondary pixel-corners" href="#aplicacoes">
            Ver aplicações da marca
          </a>
        </div>
      </div>
    </header>
  );
}
