const STACK = [
  {
    title: 'React Bits',
    desc: 'Componentes animados e backgrounds WebGL — usado aqui no ColorBends da hero.',
    href: 'https://reactbits.dev/'
  },
  {
    title: 'Next.js',
    desc: 'Framework React usado para estruturar este site e viabilizar o componente ColorBends.',
    href: 'https://nextjs.org/'
  },
  {
    title: 'Three.js',
    desc: 'Motor WebGL por trás do shader do fundo animado da hero.',
    href: 'https://threejs.org/'
  }
];

export default function Stack() {
  return (
    <section id="stack" className="section section--stack reveal">
      <p className="section__eyebrow">Ferramentas</p>
      <div className="section__header">
        <h2>Stack visual &amp; referências</h2>
        <p>Tecnologias e bibliotecas usadas para dar vida à identidade Studio Pixel neste site.</p>
      </div>

      <div className="stack-grid">
        {STACK.map(item => (
          <article className="stack-item card pixel-corners" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <a href={item.href} target="_blank" rel="noreferrer">Visitar site</a>
          </article>
        ))}
      </div>
    </section>
  );
}
