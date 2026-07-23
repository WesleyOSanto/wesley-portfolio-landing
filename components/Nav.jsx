import PixelMark from './PixelMark';

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#hero" aria-label="Studio Pixel — início">
        <PixelMark size="sm" />
      </a>
      <ul className="nav__links">
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#aplicacoes">Aplicações</a></li>
        <li><a href="#ui-estudos">UI &amp; Animação</a></li>
        <li><a href="#stack">Stack</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
}
