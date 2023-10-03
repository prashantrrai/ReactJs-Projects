import { useEffect, useState } from "react"

const App = () => {

  const [username, setUsername] = useState("Sarthak")
  const [image, setImage] = useState()

  const handleData = async () => {
    const res = await fetch('https://dummyjson.com/users')
    const data = await res.json()
    setImage(data.users)
  }
  console.log(image)

  useEffect(() => {
    handleData()

  }, [])


  return (
    <>
      <div>
        {
          image.map((i) => {
            return (
              <div key={i}>
                <img src={image.image} alt={image.username} />
              </div>
            )
          })
        }
      </div>
      <form>
        <input type="text" value={username} onChange={() => {
          setUsername("Prashant")
        }} placeholder="Enter your name.." />
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
