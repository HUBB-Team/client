import Link from 'next/link'

export default class LeftMenu extends React.PureComponent {
  render () {
    return (
      <div>
        <div className="container">
          <a href="#" data-activates="nav-mobile" className="button-collapse top-nav full hide-on-large-only"><i className="material-icons">menu</i></a>
        </div>
        <ul id="nav-mobile" className="side-nav fixed ">
          <li className="logo">
            <a id="logo-container" href="index.html"><img src="/static/logo/hubbteam.png" alt="My Logo" /></a></li>
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
          <li className="no-padding">
            <ul className="collapsible collapsible-accordion">
              <li><a className="collapsible-header waves-effect waves-purple" href="#">Team</a>
                <div className="collapsible-body">
                  <ul>
                    <li><a href="index.html">Horos Gregory</a></li>
                    <li><a href="#">Ungur Stephen</a></li>
                    <li><a href="#">Bumbu Tudor</a></li>
                    <li><a href="#">Bostan John</a></li>
                    <li><a href="#">Tkacenko Alexander</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li><Link href="/credo">Credo</Link></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    )
  }
  componentDidMount () {
    $('.button-collapse').sideNav()
  }

}
