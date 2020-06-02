const fs = require("fs");
const path = require("path");
const dirname=path.resolve(__dirname,'./file/1.txt')
async function exits(filename) {
    try{
        await fs.promises.stat(filename);
        return true;
    }catch(err){
        if(err.code==='ENOENT'){
            return false;
        }
        throw err;
    }
}

async function test(){
    const result=await exits(dirname);
    if(result){
        console.log('目录已存在无需创建')
    }else{
        await fs.promises.mkdir(dirname);
        console.log('目录创建成功')
    }
}

test();
