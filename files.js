const express = require('express');
const multer = require('multer');
//const fileUpload = require('express-fileupload');
const fs = require('fs');
const newfilepath=`./backup/Text_${Date.now()}.txt`;

const app = express();
const port = 5100;


// Multer configuration

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, res, cb) {
            cb(null, "uploads")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "FN" + ".txt")
        }
    })

}).fields([{name:"a_file"},{name:"b_file"}]);

app.post("/uploadfile",upload, (req, res) => {
    res.send("file uploaded");
})

//Read the  uploaded file
// app.get("/display",(req,res)=>{
//        fs.readFile('/home/ai/Desktop/nodejsPractice/uploads/a_fileFN.txt', 'utf8', (err, data) =>{
//     if(err) {
//         console.error(err);
//     }else{
//         console.log(data);
//     }
    
// });


app.get("/display",(req,res)=>{
    fs.readFile(newfilepath,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    })
    
})


app.post("/merge/:n1/:n2",(req,res)=>{
    const file1Path = `./uploads/a_fileFN${req.params.n1}.txt`;
    const file2Path = `./uploads/b_fileFN${req.params.n2}.txt`;
   
    fs.readFile(file1Path,(err,data)=>{
     if(err){merge/:n1/:n2
         console.log(err);
     }
     else{
         fs.writeFile(newfilepath,data,(err)=>{
             if(err){
                 console.log(err);
             }
         });
         fs.readFile(file2Path,(err,data)=>{
             if(err){
                 console.log(err);
             }
             else{
                 fs.appendFile(newfilepath,` ${data}`,(err)=>{
                     if(err){
                        console.log(err);
                    }
                });
                
            }
            console.log("new file created");
            res.send("new file created");
           })
        
    }
   })
});

app.post("/upload",upload,(req,res)=>{
    res.send("uploaded");   
 });
 
 app.delete("/delete/:n1/:n2",(req,res)=>{
     fs.unlink(`./uploads/a_fileFN${req.params.n1}.txt`,(err)=>{
         console.log("File deleted")
     });
     fs.unlink(`./uploads/b_fileFN${req.params.n2}.txt`,(err)=>{
         console.log("File deleted");
     });
     res.send("File Deleted successfully !");
 });

// Start the server
app.listen(port,(err)=>{
    console.log(`I am listening at port number http://localhost:${port}`);
})


