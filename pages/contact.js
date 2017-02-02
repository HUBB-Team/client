import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

export default class Contact extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <header>
          <Sidebar />
          <nav className="top-nav">
            <div className="container">
              <div className="nav-wrapper">
                <a className="page-title1">Contact Us </a>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <div className="container">
            <div className="row" id="contact-row-margin-top">
              <div className="col m10 offset-m1 s12">
                <div className="row">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col m6 s12">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="first_name" type="text" className="validate" />
                        <label htmlFor="first_name">Full Name</label>
                      </div>
                      <div className="input-field col m6 s12">
                        <i className="material-icons prefix">email</i>
                        <input id="email" type="email" className="validate" required />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <i className="material-icons prefix">mode_edit</i>
                        <textarea id="message" className="materialize-textarea" data-length="3000" ref="message" />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col m12">
                        <p className="right-align">
                          <button className="btn btn-large waves-effect waves-light purple" type="button" name="action">
                            Send Message
                          </button>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    )
  }
  componentDidMount () {
    $(this.refs.message).characterCounter()
  }
}
