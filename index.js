const express = require('express');
const app = express();
const port = 3000;
let list = [];
let nextid=1;
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.listen(port, () =>{console.log(`http://localhost:${port}`)})

app.get('/L', (req, res) => {

    res.json(list);
});

// app.get('/L/:p', (req, res) => {
//   let list1 = req.params.p;
//     let obj = {list1};
//     list.push(obj);
//
//     res.json({message:"ok"});
//
// });

app.post('/L', (req, res) => {
    let text = req.body.txt;
    let id = nextid++;

    if (!text){
        res.status(400).json({message:"no"});

    }else {
        let task = {id,text};
        list[id] = task;
    }

    res.status(201).json({message:"ok"});
})

app.delete('/L:id', (req, res) => {
    let id = req.params.id;
    if(list.length <id || id<0){
        return res.status(400).json({message:"no"});
    }
    list[id]=null;
    res.status(200).json({message:"list_delete"});
})

app.listen(port,()=>{console.log(`http://localhost:${port}`)});