import express from 'express';

const app = express();


function sum (n){
    let a = 0;
    for(let i = 0 ; i <= n ; i++){
        a = a + i;
    }
    return a;
}

app.get('/',function(req,res){
        let value = req.query.n;
        res.send("the sum of given number is" + sum(value));
})

// the sun of given number is 5050  if 100 




app.get('/mukti',function(req,res){
        res.send('soory mukti')
})


app.get('/sihvam',function(req,res){
    res.send('soory mukti')
})

app.get('/yeshu',function(req,res){
    res.send('soory from the side mukti gupta to pyara shivam yeshu hmaar aapka sbka ')
})


// req.query.n //  http://localhost:3003/?n=100\

// req.params.n // http://localhost:3003/100\

// req.body.n // http://localhost:3003/100\

// get

// post

// put     post delete 

const port = 3003;
app.listen(port , console.log('Server is running on port  ' + port));