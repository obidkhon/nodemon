const express=require('express')
const app=express()
const port=process.env.PORT||3333


const gullar=[
    {id:1,name:'Atirgul' },
    {id:2,name:'LOla' },
    {id:3,name:'Astra' },
    {id:1,name:'Nilufar' },




]











app.get('/api/gullar',(req,res)=>{
    res.send(gullar)
})


app.get('/api/gullar/:id',(req,res)=>{
    const gul=gullar.find(a=>a.id===parseInt(req.params.id))
if(!gul)
res.status(404).send('Bu yreda hech qanday IDga tegishi ma\'lumot tppilmadi')
   res.send(gul)
    
})
app.listen(port,()=>{
    console.log(`${port}ni tinglang...`)
})