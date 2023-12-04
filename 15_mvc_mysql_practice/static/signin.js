function checkLogin() {
    const form = document.forms['signin'];


    axios({
        method: "POST",
        url: "/signin",
        data: {
            id: form.id.value,
            pw: form.pw.value
        }
    }).then((res) => {
        console.log(res.data);
        
        if(res.data.loginResult ==='idError'){
            alert('등록되지 않은 아이디입니다')
            form.reset();
            
        }else if(res.data.loginResult==='pwError'){
            alert('비밀번호를 확인해주세요')
            form.reset();
        }else {
            document.location.href = '/profile';

    }
})
}
        