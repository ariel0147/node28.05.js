const express = require('express');
const app = express();
const port = 3000;
let list = [];
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.listen(port, () =>{console.log(`http://localhost:${port}`)})

app.get('/L', (req, res) => {

    res.json(list);
});
app.get('/L/:p', (req, res) => {
  let list1 = req.params.p;
    let obj = {list1};
    list.push(obj);

    res.json({message:"ok"});


});
app.listen(port,()=>{console.log(`http://localhost:${port}`)});