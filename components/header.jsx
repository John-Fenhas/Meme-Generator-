

export default function Header() {
  return (
    <header id="header-root" className="site-header" role="banner">
      <div className="container">
        <a className="brand" href="#" aria-label="Modern Meme Generator Home">
          <strong className="logo" aria-hidden="true">MG</strong>
          <div className="brand-text">
            <h1 className="site-title">Modern Meme Generator</h1>
            <p className="site-tag">Upload an image, add text, style it, and download (JS disabled).</p>
          </div>
        </a>
        <nav className="site-nav" role="navigation" aria-label="Primary">
          <ul>
            <li><a href="#controls">Controls</a></li>
            <li><a href="#preview">Preview</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )  

}