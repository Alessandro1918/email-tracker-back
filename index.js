const express = require("express")

const PORT = process.env.PORT || 4000

const app = express()

//http://localhost:4000/track?id=1&recipient=2&subject=3
app.get("/track", (req, res) => {
  console.log(`ID: ${req.query["id"]}`)
  console.log(`recipient: ${req.query["recipient"]}`)
  console.log(`subject: ${req.query["subject"]}`)
  return res.status(200).send("Hello, World!")
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))