export default function UIStudies() {
  return (
    <section id="ui-estudos" className="section section--ui reveal">
      <p className="section__eyebrow">Experimentos</p>
      <div className="section__header">
        <h2>UI &amp; animação</h2>
        <p>
          Demos e experimentos de interfaces animadas — incluindo o fundo WebGL desta página,
          feito com o componente ColorBends do React Bits.
        </p>
      </div>

      <div className="ui-grid">
        <article className="ui-card card pixel-corners">
          <h3 className="ui-card__title">Background WebGL — ColorBends</h3>
          <p className="ui-card__desc">
            Shader em Three.js que distorce e mistura as cores da marca em tempo real, reagindo
            ao movimento do mouse. Está rodando ao vivo lá no topo desta página.
          </p>
          <div className="ui-card__actions">
            <a className="btn btn--small btn--green pixel-corners" href="https://reactbits.dev/backgrounds/color-bends" target="_blank" rel="noreferrer">
              Ver componente original
            </a>
          </div>
        </article>

        <article className="ui-card card pixel-corners">
          <h3 className="ui-card__title">Botões 8-bit</h3>
          <p className="ui-card__desc">
            Botões com sombra sólida deslocada e efeito de "afundar" ao clicar — releitura dos
            botões de fliperama para a web.
          </p>
          <div className="ui-card__actions">
            <a className="btn btn--small pixel-corners" href="#contato">
              Testar um botão
            </a>
            <a className="btn btn--small btn--secondary pixel-corners" href="#aplicacoes">
              Ver aplicações
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
