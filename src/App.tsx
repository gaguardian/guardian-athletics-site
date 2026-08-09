function App() {
  return (
    <main className="splash">
      <div className="splash__glow" aria-hidden="true" />

      <section className="splash__content" aria-label="Guardian Athletics">
        <img
          className="brand-image"
          src="/GuardianLogo.png"
          alt="Guardian Athletics - Athletic Excellence. Personal Growth. Purpose. Discipline. Results."
        />

        <div className="coming-soon">
          <span className="coming-soon__line" />
          <span className="coming-soon__text">COMING SOON</span>
          <span className="coming-soon__line" />
        </div>
      </section>

      <footer className="splash__footer">
        <span>GUARDIAN ATHLETICS</span>
      </footer>
    </main>
  )
}

export default App
