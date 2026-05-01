import { Form } from 'react-bootstrap'

export default function SortDropdown({ value, setValue }) {
  return (
    <Form.Select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      style={{ width: '220px', marginBottom: '15px' }}
    >
      <option value="none">Sort By</option>
      <option value="title">Title (A–Z)</option>
      <option value="rating">TMDB Rating</option>
      <option value="userRating">Your Rating ⭐</option>
    </Form.Select>
  )
}