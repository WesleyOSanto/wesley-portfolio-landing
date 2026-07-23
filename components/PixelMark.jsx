export default function PixelMark({ size = 'md', showTagline = false, className = '' }) {
  return (
    <div className={`pixel-mark pixel-mark--${size} ${className}`}>
      <span className="pixel-mark__studio">studio</span>
      <span className="pixel-mark__word">
        <span className="pixel-mark__letter pixel-mark__letter--p">P</span>
        <span className="pixel-mark__letter pixel-mark__letter--i">I</span>
        <span className="pixel-mark__letter pixel-mark__letter--x">X</span>
        <span className="pixel-mark__letter pixel-mark__letter--e">E</span>
        <span className="pixel-mark__letter pixel-mark__letter--l">L</span>
      </span>
      {showTagline ? <span className="pixel-mark__tagline">Manual de identidade visual</span> : null}
    </div>
  );
}
