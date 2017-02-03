import Document, { Head, Main, NextScript } from 'next/document'
import Link from 'next/link'
import Sidebar from '../Components/Sidebar'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const props = await Document.getInitialProps(ctx)
    return props
  }

  render () {
    return (
      <html lang="ro">
        <Head >
          <title> Our Site </title>
          <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link rel="stylesheet" href="/static/bower_components/materialize/dist/css/materialize.css" />
          <link rel="stylesheet" href="/static/css/style.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body>
          <header>
            <Sidebar />
          </header>
          <Main />
          <footer >
            <div className="footer-copyright">
              <div className="container center">
                    Made by <Link className="purple" href="/team"><span>HUBB Team</span></Link>
              </div>
            </div>
          </footer>
          <style jsx>{`
            footer {
              position: 'fixed';
              right: 0;
              bottom: 0;
              left: 0;
              'padding-top': '1rem';
              'padding-bottom': '1rem';
              'background-color': '#efefef';
              'text-align': 'center';
            }
    `}</style>

          <script src="/static/bower_components/jquery/dist/jquery.js" />
          <script src="/static/bower_components/materialize/dist/js/materialize.js" />
          <NextScript />
        </body>
      </html>
    )
  }
}

