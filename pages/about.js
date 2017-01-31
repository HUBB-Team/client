import Link from 'next/link'
import Header from '../Components/Header'

export default class About extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <h1>About</h1>
        <Link href="/">Main</Link>
      </div>
    )
  }
}
