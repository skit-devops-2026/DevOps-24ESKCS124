import './App.css'
import '../css/base.css'
import '../css/components.css'
import '../css/layout.css'
import '../css/pages/feed.css'

function App() {
  return (
    <>
      <header className="site-header">
        <nav className="navigation" aria-label="Main navigation">
          <a className="logo" href="index.html">
            Loop
          </a>

          <div className="nav-actions">
            <a className="nav-link" href="about.html">
              About
            </a>

            <a className="nav-link" href="contact.html">
              Contact
            </a>

            <a className="nav-link" href="login.html">
              Log in
            </a>

            <a className="nav-button" href="register.html">
              Get started
            </a>
          </div>
        </nav>
      </header>

      <main className="feed-shell">
        <div className="feed-heading">
          <div>
            <h1>For you</h1>

            <p>Short videos. Fresh ideas. Your next loop.</p>

            <p className="product-description">
              Loop is a place to discover quick stories, share your creativity,
              and find people who see the world the way you do. Watch something
              new, join the conversation, and make a moment worth repeating.
            </p>
          </div>

          <a className="upload-link" href="register.html">
            + Create a loop
          </a>
        </div>

        <nav className="topics" aria-label="Video topics">
          <span className="topic active">For you</span>
          <span className="topic">Following</span>
          <span className="topic">Trending</span>
          <span className="topic">Music</span>
          <span className="topic">Comedy</span>
          <span className="topic">Sport</span>
        </nav>

        <div className="feed-grid">
          <article
            className="reel-card"
            aria-label="Featured short video placeholder"
          >
            <div className="reel-center" aria-hidden="true">
              <span>▶</span>
            </div>

            <div className="reel-top">
              <span>Featured</span>
              <strong>1 / 6</strong>
            </div>

            <div className="reel-details">
              <h2>Something new is always looping</h2>

              <p>
                A place for quick stories, creative sparks, and the people
                behind them.
              </p>

              <div className="profile-row">
                <span className="avatar">L</span>
                Loop community
              </div>
            </div>

            <div className="reel-actions" aria-label="Video actions">
              <button
                className="action-button"
                type="button"
                aria-label="Like video"
              >
                ♡
              </button>

              <button
                className="action-button"
                type="button"
                aria-label="Comment on video"
              >
                ✉
              </button>

              <button
                className="action-button"
                type="button"
                aria-label="Share video"
              >
                ↗
              </button>
            </div>
          </article>

          <aside className="discover" aria-labelledby="discover-title">
            <h2 id="discover-title">Discover more</h2>

            <div className="preview-list">
              <article className="preview">
                <div className="preview-image" aria-hidden="true">
                  ▶
                </div>

                <div className="preview-copy">
                  <h3>Small moments, big energy</h3>
                  <p>2.4k views</p>
                </div>
              </article>

              <article className="preview">
                <div className="preview-image" aria-hidden="true">
                  ▶
                </div>

                <div className="preview-copy">
                  <h3>Make room for your next idea</h3>
                  <p>1.8k views</p>
                </div>
              </article>

              <article className="preview">
                <div className="preview-image" aria-hidden="true">
                  ▶
                </div>

                <div className="preview-copy">
                  <h3>What is on your loop today?</h3>
                  <p>986 views</p>
                </div>
              </article>
            </div>

            <section className="about-loop" aria-labelledby="about-title">
              <h2 id="about-title">What is Loop?</h2>

              <p>
                A simple home for short-form video where every creator has a
                chance to be seen and every viewer can find something that
                feels personal.
              </p>
            </section>
          </aside>
        </div>
      </main>
    </>
  )
}

export default App