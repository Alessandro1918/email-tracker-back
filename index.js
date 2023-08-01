const express = require("express")
const path = require("path")

const PORT = process.env.PORT || 4000

const app = express()

app.use('/images', express.static('images'))

//http://localhost:4000/track?id=1&recipient=2&subject=3
app.get("/track", (req, res) => {
  console.log(`New request! ID: ${req.query["id"]}  Recipient: ${req.query["recipient"]}  Subject: ${req.query["subject"]}`)
  return res
    .status(200)
    // .send("Hello, World!")
    .sendFile(path.join(__dirname, "images/pixel.png"))
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))