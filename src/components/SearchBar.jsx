import { Form } from 'react-bootstrap'

export default function SearchBar({ setSearch }) {
  return (
    <Form.Control
      type="text"
      placeholder="Search movies..."
      onChange={(e) => setSearch(e.target.value)}
      style={{ margin: '20px 0' }}
    />
  )
}