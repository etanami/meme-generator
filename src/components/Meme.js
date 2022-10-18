
const Meme = () => {
  return (
    <main>
      <form className="form">
        <input type="text" placeholder="First Text" className="form--input"/>
        <input type="text" placeholder="Second Text"  className="form--input"/>
        <button className="form--button">Get a new meme image  🖼</button>
      </form>
    </main>
  )
}

export default Meme;