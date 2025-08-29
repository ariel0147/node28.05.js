const express = require('express');
const app = express();
const port = 3000;
let list = [];
let nextid=1;

app.use(express.static(__dirname));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.listen(port, () =>{console.log(`http://localhost:${port}`)})

app.get('/L', (req, res) => {

    res.json(list);
});


app.post('/L', (req, res) => {
    let text = req.body.txt;
    let id = nextid++;
    let stay = false;
    if (!text){
        res.status(400).json({message:"no"});

    }else {
        let task = {id,text,stay};
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

app.get('/L:id', (req, res) => {
    let id = req.params.id;
    if(list.length <id || id<0||list[id==null]){
        return res.status(400).json({message:"no"});
    }

    res.json(list[id]);
})

app.patch('/L:id', (req, res) => {
    let id = req.params.id;
    if(list.length <id || id<0||list[id==null]){
        return res.status(400).json({message:"no"});
    }
    let stay = req.body.stay;
    if (stay!=undefined){
        list[id].stay = stay;
    }

    let text = req.body.txt;
    if (text) {
        list[id].text = text;
    }


    res.json(list[id]);

})



app.listen(port,()=>{console.log(`http://localhost:${port}`)});