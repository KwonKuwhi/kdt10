function checkLogin() {
    const form = document.forms['signin'];


    axios({
        method: "POST",
        url: "/user/signin",
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
            alert('로그인 성공');
            //profile 페이지 요청 보내기
            const form_info = document.forms['form_info'];
            form_info.userId.value = form.id.value;
            //form_info 제출
            form_info.submit(); // 일반 폼 전송

    };
})
}
        