export default function About() {
  return (
    <section id="sobre" className="section section--about reveal">
      <div className="about-layout">
        <div className="about-photo pixel-corners">
          <img src="/img/avatar-wesley.jpg" alt="Wesley Oliveira, aluno do SENAC Salto" loading="lazy" />
        </div>
        <div className="about-text">
          <p className="section__eyebrow">Sobre mim</p>
          <h2>Wesley Oliveira</h2>
          <p>
            Designer gráfico e desenvolvedor front-end, com foco em identidade visual, UI
            animada e experiência do usuário.
          </p>
          <p>
            Este portfólio faz parte dos meus estudos como aluno do SENAC Salto. A identidade
            <strong> Studio Pixel</strong>, que dá o tom visual deste site, foi desenvolvida como
            um exercício completo de branding — do manual de marca às aplicações em produto.
          </p>
        </div>
      </div>
    </section>
  );
}
