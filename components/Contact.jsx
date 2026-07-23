export default function Contact() {
  return (
    <section id="contato" className="section section--contact reveal">
      <p className="section__eyebrow">Fale comigo</p>
      <div className="section__header">
        <h2>Contato</h2>
        <p>Se quiser conversar sobre projetos, estudos ou colaborações, pode me chamar pelos canais abaixo.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-item card pixel-corners">
          <h3>WhatsApp</h3>
          <p>+55 (11) 9 9858-6090</p>
        </div>
        <div className="contact-item card pixel-corners">
          <h3>Behance</h3>
          <a href="https://www.behance.net/wesleysantos119" target="_blank" rel="noreferrer">
            behance.net/wesleysantos119
          </a>
        </div>
        <div className="contact-item card pixel-corners">
          <h3>Adobe Portfolio</h3>
          <p>link será adicionado assim que o site estiver publicado.</p>
        </div>
      </div>
    </section>
  );
}
