import Link from 'next/link'

export default class Team extends React.Component {
  render () {
    return (
      <main>
        <nav className="top-nav">
          <div className="container">
            <div className="nav-wrapper">
              <a className="page-title1">Our Team</a>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Link href="/horos">
                <div className="card blue-grey darken-2">
                  <div className="card-content white-text">
                    <span className="card-title">Horos Grigorii</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                             tempor incididunt ut labore et dolore magna aliqua.
                             </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col s12 m6">
              <Link href="/bumbu">
                <div className="card blue darken-2">
                  <div className="card-content white-text">
                    <span className="card-title">Bumbu Tudor</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                             tempor incididunt ut labore et dolore magna aliqua.
                             </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <Link href="/ungur">
                <div className="card orange darken-2">

                  <div className="card-content white-text">

                    <span className="card-title">Ungur Stefan</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                             tempor incididunt ut labore et dolore magna aliqua.
                             </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col s12 m6">
              <Link href="/bostan">
                <div className="card brown darken-2">
                  <div className="card-content white-text">
                    <span className="card-title">Bostan Ion</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                             tempor incididunt ut labore et dolore magna aliqua.
                             </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
