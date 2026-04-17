import fs from "fs";
import yargs from 'yargs';
const argv = yargs(process.argv.slice(2)).parse();

var filename = argv.filename;

if(fs.existsSync('./data/'+filename)){
    console.log("file already exists. Please enter another name");
}else{
    fs.open('./data/'+filename,'wx+',(err,data)=>{
        if(err) console.log(err);
        else console.log("file opened:", filename);

        fs.writeFile("./data/"+filename, "You are awesome\n", (err)=>{
            if(err) console.log(err);
        })
    })
}
// fs.stat('mytest.txt',(err,stat)=>{   
//     if(err) console.log(err);

//     console.log(stat.isFile());
// })