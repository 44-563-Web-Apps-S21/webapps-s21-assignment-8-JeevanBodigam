const http = require('http')    //Pull in a useful node package

const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req, res) => {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> <style>table{width:350px;margin:auto;text-align:center;} table,tr,td,th{border:2px solid brown;border-collapse:collapse;}</style></head>')
      res.write('<table>')
      res.write('<tr> <th>Location</th><th>Number of Hours</th> <th>Amount in $</th></tr>')
      res.write('<tr><td>Coorg</td><td>10</td><td>350</td> </tr>')
      res.write('<tr><td>Leh</td><td>8</td><td>250</td> </tr>')
      res.write('<tr><td>Araku</td> <td>12</td> <td>400</td> </tr>')
      res.write('<tr><td>Ooty</td><td>8</td><td>750</td></tr>')
      res.write(' <tr> <td>Amritsar</td><td>3</td> <td>150</td></tr>')
      res.write('</table>')
      res.end('</body></html>')
      //Close the response
    }
  )

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})