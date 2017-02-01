import Link from 'next/link'

export default class Sidebar extends React.PureComponent {
  render () {
    return (
      <div>
        <div className="container">
          <a href="#" data-activates="nav-mobile" className="button-collapse top-nav full hide-on-large-only"><i className="material-icons">menu</i></a>
        </div>
        <ul id="nav-mobile" className="side-nav fixed ">
          <li className="logo">
            <a id="logo-container" href="index.js"><img src="/static/logo/hubbteam.png" alt="My Logo" /></a></li>
          <li>
            <nav className="purple">
              <div className="nav-wrapper">
                <form>
                  <div className="input-field">
                    <input id="search" type="search" required />
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                  </div>
                </form>
              </div>
            </nav>
          </li>
          <li><Link href="/">About</Link></li>

          <ul>
            <li className="">Team</li>
            <ul>
              <li><Link href="/horos">Grigore Horos</Link></li>
              <li><Link href="/ungur">Ungur Stefan</Link></li>
              <li><Link href="#">Bumbu Tudor</Link></li>
              <li><Link href="#">Bostan John</Link></li>
              <li><Link href="#">Tkacenko Alexander</Link></li>
            </ul>
          </ul>
          <li><Link href="/credo">Credo</Link></li>
          <li><Link href="#">Contact</Link></li>
        </ul>
      </div>
    )
  }
  componentDidMount () {
    $('.button-collapse').sideNav()
  }

}
