import Head from 'next/head'

export default class Styles extends React.Component {
  render () {
    return (
      <Head>
        <title> Our Site </title>
        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="/static/css/materialize.css" />
        <link rel="stylesheet" href="/static/css/style.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://code.jquery.com/jquery-2.1.1.min.js" />
        <script src="/static/js/materialize.min.js" />
      </Head>
    )
  }
}
