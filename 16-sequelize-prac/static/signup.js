function userRegister(){
    const form = document.forms['signup'];

    if(form.id.value.length===0 ){
        alert('id를 입력해주세요');
        return;
    }else if(form.pw.value.length===0){
        alert('패스워드를 입력해주세요');
        return;
    }else if(form.name.value.length===0){
        alert('이름을 입력해주세요');
        return;
    }

    axios({
        method: "POST",
        url:"/user/signup",
        data: {
            id: form.id.value,
            pw: form.pw.value,
            name: form.name.value
        }
    }).then((res)=>{
        console.log(res.data); // controller에서 값을 전달받은 후에 확인!
        alert("회원가입 완료!");
        document.location.href='/user/signin';

    })
}
