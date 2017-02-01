import Header from '../Components/Header'
import LeftMenu from '../Components/LeftMenu'

export default class Main extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <header>
          <LeftMenu />
          <nav className="top-nav">
            <div className="container">
              <div className="nav-wrapper">
                <a className="page-title">Our Credo Is Bla-Bla-Bla</a>
                <img className="huinea" src="/static/images/bum.png" alt="bum" />

                <div className="card green lighten-5">

                  <div className="card-content black-text">

                    <span className="card-title">WOW!!!</span>

                    <p>We have credo.

                             </p>

                  </div>
                </div>

              </div>
            </div>
          </nav>
        </header>
        <main>
          <div className="container">
            <div className="row" />
          </div>
          <Scripts />
        </main>
      </div>
    )
  }
}
