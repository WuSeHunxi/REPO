function login(){
    const expiresDay=122;
    const date=new Date();
    date.setTime(date.getTime()+expiresDay*24*60*60*1000);
    document.cookie=`login=true;expires=${date}`;
}

function cancelLogin(){
    const date=new Date();
    date.setTime(date.getTime-100000000);
    document.cookie=`login=true;expires=${date}`;
}

function isLogin(){
    return document.cookie.includes("login=true");
}

export default{
    login,
    cancelLogin,
    isLogin
}