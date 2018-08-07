const fs=require('fs')
const http=require('http')
const path=require('path')

//记录网站根目录
let roorPath=path.join(__dirname,'www')
//创建服务器
let server=http.createServer((request,response)=>{
    //生成地址
    let targetPath=path.join(rootPath,request.url);
    //判断路径是否存在
    //存在
    if(fs.existsSync(targetPath)){
        //文件 还是文件夹
        let stats=fs.stat(targetPath);
        response.end('exist')
    }
    else{
        response.statusCode=404;
        response.setHeader('content-type','text/html;charset=utf-8');
        response.end(`
        <!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
        <html><head>
        <title>404 Not Found</title>
        </head><body>
        <h1>Not Found</h1>
        <p>你请求的${request.url} 不在服务器上哦,检查一下呗</p>
        </body></html>
        `)
    }
    
})

server.listen(8847,'127.0.0.1',()=>{
    console.log('开b启成功')
})