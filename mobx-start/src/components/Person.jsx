export default function Person({ age10, plus }) {
  const click = () => {
    plus()
  }

  return (
    <div>
      <h1>{age10}</h1>
      <p>
        <button onClick={click}>plus</button>
      </p>
    </div>
  )
}
