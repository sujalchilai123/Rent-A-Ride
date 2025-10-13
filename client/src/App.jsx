import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [cars, setCars] = useState([])
  const [category, setCategory] = useState('all')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    async function fetchCars() {
      try {
        setLoading(true)
        setError('')
        const params = new URLSearchParams()
        if (category !== 'all') params.set('category', category)
        const res = await fetch(`/api/cars?${params.toString()}`, { signal: controller.signal })
        if (!res.ok) throw new Error(`Failed to load cars: ${res.status}`)
        const data = await res.json()
        setCars(data)
      } catch (e) {
        if (e.name !== 'AbortError') setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchCars()
    return () => controller.abort()
  }, [category])

  return (
    <div className="container">
      <header className="header">
        <h1>Rent-A-Ride</h1>
        <nav className="filters">
          <button className={category === 'all' ? 'active' : ''} onClick={() => setCategory('all')}>All</button>
          <button className={category === 'luxury' ? 'active' : ''} onClick={() => setCategory('luxury')}>Luxury</button>
          <button className={category === 'suv' ? 'active' : ''} onClick={() => setCategory('suv')}>SUV</button>
          <button className={category === 'economy' ? 'active' : ''} onClick={() => setCategory('economy')}>Economy</button>
        </nav>
      </header>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="grid">
        {cars.map(car => (
          <div key={car._id} className="card">
            <img src={car.imageUrl} alt={car.name} />
            <div className="card-body">
              <h3>{car.name}</h3>
              <p className="muted">{car.brand} • {car.category.toUpperCase()}</p>
              <p className="price">₹{car.dailyRate}/day</p>
              <button disabled={!car.available}>{car.available ? 'Rent Now' : 'Unavailable'}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
