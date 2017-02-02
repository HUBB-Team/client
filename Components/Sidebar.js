import Link from 'next/link'

export default class Sidebar extends React.PureComponent {
  render () {
    return (
      <div>
        <div className="container">
          <a data-activates="nav-mobile" className="button-collapse top-nav full hide-on-large-only"><i className="material-icons">menu</i></a>
        </div>
        <ul id="nav-mobile" className="side-nav fixed">
          <li className="logo">
            <Link href="/"><img src="/static/logo/hubbteam.png" alt="My Logo" /></Link></li>
          <li>
            <nav className="purple" />
          </li>
          <ul>
            <li><Link href="/team">Team</Link></li>
            <ul className="team">
              <li><Link href="/horos">Horos Grigorii</Link></li>
              <li><Link href="/ungur">Ungur Stefan</Link></li>
              <li><Link href="/bumbu">Bumbu Tudor</Link></li>
              <li><Link href="/bostan">Bostan John</Link></li>
            </ul>
          </ul>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    )
  }
  componentDidMount () {
    $('.button-collapse').sideNav()
  }

}
