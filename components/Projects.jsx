const PROJECTS = [
  {
    title: 'Studio Pixel — Manual de Identidade Visual',
    category: 'Branding · Identidade visual',
    desc: 'Sistema de marca completo: wordmark em pixel art, paleta, mascote e aplicações em produto — do manual ao merchandising.',
    thumb: '/img/sp-logo-poster.jpg',
    contain: false,
    href: '#aplicacoes'
  },
  {
    title: 'Uruá Titura Natural – Produtos de Maquiagem',
    category: 'Embalagem · Identidade visual',
    desc: 'Desenvolvimento de identidade e embalagem com foco em estética natural e comunicação sensorial.',
    thumb: '/img/thumb-urua.jpg',
    contain: true,
    href: 'https://www.behance.net/wesleysantos119'
  },
  {
    title: 'Contracolonização e Cosmofobia – Releitura de Livro',
    category: 'Editorial · Projeto gráfico',
    desc: 'Releitura visual de obra com foco em composição, tipografia e ritmo de leitura.',
    thumb: '/img/thumb-contracolonizacao.jpg',
    contain: false,
    href: 'https://www.behance.net/wesleysantos119'
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="section section--projects reveal">
      <p className="section__eyebrow">Trabalhos</p>
      <div className="section__header">
        <h2>Projetos em destaque</h2>
        <p>Projetos reais de estudo, incluindo o desenvolvimento completo da marca Studio Pixel.</p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map(project => (
          <article className="project-card card pixel-corners" key={project.title}>
            <div className={`project-card__thumb ${project.contain ? 'project-card__thumb--contain' : ''}`}>
              <img src={project.thumb} alt={project.title} loading="lazy" />
            </div>
            <div className="project-card__body">
              <span className="project-card__category">{project.category}</span>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.desc}</p>
            </div>
            <div className="project-card__footer">
              <a
                className="project-card__link"
                href={project.href}
                target={project.href.startsWith('http') ? '_blank' : undefined}
                rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {project.href.startsWith('http') ? 'Ver projeto no Behance' : 'Ver aplicações da marca'}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
