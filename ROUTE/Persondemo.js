const express=require('express');
const router=express.Router();
const Person=require('../configuration/Person');
router.post("/", async (req, res) => {
    try {
        const data = req.body;

        const newPerson = new Person(data);
        const response = await newPerson.save();
        
        res.status(200).json(response);
    } catch (error) {
        console.error('Error saving person:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



router.get('/:worktype',async (req,res)=>{
    try {
        const usertType=req.params.worktype;
        if (usertType ==='chef' || usertType ==='waiter' || usertType ==='manager') {
            const response= await Person.find({work:usertType}) 

            res.status(200).json({response})

            
        }else{
            res.status(404).json({ error: 'Invalid work type' });

        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });

        
    }
  
})
router.put('/:id',async(req,res)=>{
    try {
        const parmaid=req.params.id
        const peronsid=req.body;
        const response=await Person.findByIdAndUpdate(parmaid,peronsid,{
            new :true,
            runValidators:true
        })
        if (!response) {
            
            res.status(404).json({ error: 'persons is not defined type' });

        }
        console.log('data updated');
        res.status(200).json(response)



    } catch (error) {
        console.error('Error saving person:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
router.delete('/:id',async (req,res)=>{
    try {
        const parmaid=req.params.id
        const response = await Person.findByIdAndDelete(parmaid);

        if (!response) {
            
            res.status(404).json({ error: 'persons is not defined type' });

        }
        console.log('data updated');
        res.status(200).json(response)


        
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });

    }
})

router.get("/", async (req, res) => {
    try {
        const persons = await Person.find();
        console.log(persons);

        res.status(200).json(persons);
    } catch (error) {
        console.error('Error retrieving persons:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



module.exports=router;