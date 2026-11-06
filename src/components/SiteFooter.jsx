import { profile } from '../data/portfolio'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <strong>{profile.name} // Systems Engineer</strong>
          <span>© 2025 All rights reserved // Depth 4200m</span>
        </div>
        <nav aria-label="Footer navigation">
          <a href={profile.github} rel="noreferrer" target="_blank">GitHub</a>
          <a href={profile.linkedIn} rel="noreferrer" target="_blank">LinkedIn</a>
          <a href="#contact">Resume</a>
          <a className="site-footer__surface" href="#hero">Surface ↑</a>
        </nav>
      </div>
    </footer>
  )
}
