import Head from 'next/head'

export default class Header extends React.Component {
  render () {
    return (
      <Head>
        <title> Our Site </title>
        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="/static/bower_components/materialize/dist/css/materialize.css" />
        <script src="/static/bower_components/jquery/dist/jquery.js" />
        <script src="/static/bower_components/materialize/dist/js/materialize.js" />
        <link rel="stylesheet" href="/static/css/style.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    )
  }
}
