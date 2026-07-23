const MOCKUPS = [
  { img: '/img/sp-cap.jpg', label: 'Boné snapback' },
  { img: '/img/sp-buckethat.jpg', label: 'Bucket hat' },
  { img: '/img/sp-hoodie.jpg', label: 'Moletom oversized' },
  { img: '/img/sp-jacket.jpg', label: 'Jaqueta bomber' },
  { img: '/img/sp-businesscard.jpg', label: 'Cartão de visita — foil prateado' },
  { img: '/img/sp-gamebox.jpg', label: "Collector's edition box" },
  { img: '/img/sp-arcade.jpg', label: 'Fliperama temático' },
  { img: '/img/sp-mascot.jpg', label: 'Mascote da marca' }
];

export default function BrandApplications() {
  return (
    <section id="aplicacoes" className="section section--applications reveal">
      <p className="section__eyebrow">Case Studio Pixel</p>
      <div className="section__header">
        <h2>Aplicações da marca</h2>
        <p>
          Da grade de construção do símbolo até o produto físico: bonés, moletom, cartão de
          visita com foil, embalagem colecionável e o fliperama que virou vitrine da marca.
        </p>
      </div>

      <div className="mockup-grid">
        {MOCKUPS.map(item => (
          <article className="mockup-card card pixel-corners" key={item.label}>
            <div className="mockup-card__img">
              <img src={item.img} alt={item.label} loading="lazy" />
            </div>
            <p className="mockup-card__label">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
