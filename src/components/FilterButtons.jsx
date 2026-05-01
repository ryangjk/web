import { Button } from 'react-bootstrap'

export default function FilterButtons({ filter, setFilter }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <Button
        onClick={() => setFilter("all")}
        style={{ marginRight: '10px' }}
        variant={filter === "all" ? "dark" : "outline-dark"}
      >
        All
      </Button>

      <Button
        onClick={() => setFilter("loved")}
        variant={filter === "loved" ? "danger" : "outline-danger"}
      >
        ❤️ Loved Only
      </Button>
    </div>
  )
}