import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

export default class Horos extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <header>
          <Sidebar />
          <nav className="top-nav">
            <div className="container">
              <div className="nav-wrapper">
                <a className="page-title">My name is Bubmu Tudor</a>
                <img className="" src="/static/images/bum.png" alt="bum" />
                <div className="container">
                  <div className="row">
                    <form className="col s12">
                      <div className="row">
                        <div className="input-field col m6 s12">
                          <input type="text" className="validate">
                            <label htmlFor="first_name">First Name</label>
                          </input>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}
