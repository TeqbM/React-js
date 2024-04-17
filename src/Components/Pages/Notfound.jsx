import {Link} from 'react-router-dom'

export default function Notfound404() {
  return (
    <section className='py-10'>
      <div className="container">
          <div className="text-center">
            <h1 className='text-3xl font-bold mb-5'>Not found page</h1>
            <Link to='/' className='btn'> Home</Link>
          </div>
      </div>
    </section>
  )
}
