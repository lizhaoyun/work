$(function(){
    var user=$('#username');
    var pwd=$('#pwd');
    var phone=$('#phone');
    var numIn=$('#checknum');
    var getnum=$("#getnum");
    var btn = $("#btn");
    var usertips=$('#user-chmessage');
    var phonetips=$('#phone-chmessage');
    var pwdtips=$('#pwd-chmessage');
    var numtips=$('#num-chmessage');
    var shownum='';
    function checkuser(){
        var uservalue=user.val();
        var reg='^[\u4e00-\u9fa5_a-zA-Z0-9_]$';
        var regh=new RegExp(reg);
        var regnum = '^[0-9]*$';
        var regh2=new RegExp(regnum);
        var flag=true;
        var len=0;
        console.log(uservalue);
        if(!uservalue){
            usertips.html('用户名不能为空');
            flag=false;
            return flag;
        }
        else if(regh.test(uservalue)){
            usertips.html('用户名仅支持中英文、数字和下划线,且不能为纯数字');
            flag=false;
            return flag;
        }
        else if(regh2.test(uservalue)){
            usertips.html('用户名仅支持中英文、数字和下划线,且不能为纯数字');
            flag=false;
            return flag;
        }
        else{
            for (var i= 0; i< uservalue.length;+i++){
                if(/[u4e00-\u9fa5]/.test(uservalue[i])){
                    len+=2;
                }else{
                    len+=1;
                }
                if(len>14){
                    break;
                }
            }
            if(len>14){
                usertips.html('最长为14个英文或7个汉字');
                flag=false;
                return flag;
            }else{
                usertips.html('');
                flag=true;
                return flag;
            }
        }
    }

    function checkphone(){
        var phonevalue=phone.val();
        var flag=true;
        if(!phonevalue){
            phonetips.html('手机号不能为空');
            flag=false;
            return flag;
        }
        else if(!(/^1[3456789]\d{9}$/.test(phonevalue))){
            phonetips.html('手机号格式不正确');
            flag=false;
            return flag;
        }
        else{
            phonetips.html('');
            flag=true;
            return flag;
        }
    }

    function checkpwd(){
        var pwdvalue=pwd.val();
        var flag=true;
        if(!pwdvalue){
            pwdtips.html('密码不能为空');
            flag=false;
            return flag;
        }
        else if(!(/^[a-zA-Z0-9_]{8,14}$/.test(pwdvalue))){
            pwdtips.html('密码不符合规范');
            flag=false;
            return flag;
        }
        else{
            pwdtips.html('');
            flag=true;
            return flag;
        }
    }
    function checknum(shownum){
        var numvalue=numIn.val();
        var flag=true;
        console.log(shownum);
        console.log(numvalue);
        if(!numvalue){
            numtips.html('验证码不能为空');
            flag=false;
            return flag;
        }else if(shownum!==Number(numvalue)){
            numtips.html('验证码不正确');
            flag=false;
            return flag;
        }else{
            numtips.html('');
            flag=true;
            return flag;
        }
    }

    getnum.click(function(){
        var count=3;
        var num = Math.floor(Math.random()*10*1111);
        var timer;
        shownum=num;
        getnum.val(num);
        getnum.attr('disabled','true');
        timer=setInterval(function(){
            count--;
            console.log(count);
            if(count===-1){
                getnum.val('获取验证码');
                getnum.removeAttr("disabled");
                clearInterval(timer);
            }
        },1000);
    });

    user.focusout(function(){
        checkuser();
        
    })
    phone.focusout(function(){
        checkphone();
    })
    pwd.focusout(function(){
        checkpwd();
    })
    numIn.focusout(function(){
        checknum(shownum);
    })


    btn.click(function(){
        console.log('a');
        console.log(shownum);
        if(!checkuser()){
            phonetips.html('');
            pwdtips.html('');
            numtips.html('');
        }
        else if(!checkphone()){
            usertips.html('');
            pwdtips.html('');
            numtips.html('');
        }
        else if(!checkpwd()){
            usertips.html('');
            phonetips.html('');
            numtips.html('');
        }
        else if(!checknum(shownum)){
            usertips.html('');
            phonetips.html('');
            pwdtips.html('');
        }
        else{
           window.alert('注册成功!');
        }
    })
    
})