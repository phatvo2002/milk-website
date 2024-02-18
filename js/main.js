$(document).ready(function(){

    function kiemtratendn(){
        var tendn=$("#txtName").val()
        var regextendn=/^[A-Za-z\d]{8,}$/
        if(tendn.trim()=="")
        {
            $("#errorName").html("tên đăng nhập không được để trống")
            return false
        }
        if(!regextendn.test(tendn))
        {
            $("#errorName").html("tên đăng nhập phải ít nhất 8 kí tự")
            return false
        }
        $("#errorName").html("(*)")
        return true
    }

    $("#txtName").blur(kiemtratendn)

    function kiemtrasdt(){
        var sdt=$("#txtNumber").val()
        var regexphone=/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
        if(sdt.trim()=="")
        {
            $("#errorNumber").html("Số điện thoại không được để trống")
            return false
        }
        if (!regexphone.test(sdt))
        {
            $("#errorNumber").html("Số điện thoại phải đúng định dạng")
            return false
        }
        $("#errorNumber").html("(*)")
        return true
    }
    $("#txtNumber").blur(kiemtrasdt)


    function checkEmail(){
        var checkemail=$("#txtEmail").val()
        var regexemail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(checkemail.trim()=="")
        {
            $("#errorEmail").html("email không được để trống")
            return false
        }

        if(!regexemail.test(checkemail))
        {
            $("#errorEmail").html("email phải đúng định dạng")
            return false
        }
        $("#errorEmail").html("(*)")
        return true
    }

    $("#txtEmail").blur(checkEmail)

    function checkpassword(){
        var checkpass =$("#txtPassword").val()
        var regexpass=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        if(checkpass.trim()=="")
        {
            $("#errorPassword").html("Mật khẩu không được để trống")
            return false
        }
        if(!regexpass.test(checkpass))
        {
            $("#errorPassword").html("Mật khẩu phải tối đa 8 kí tự bao gồm số chữ và kí tự đặt biệt")
            return false
        }
        $("#errorPassword").html("(*)")
            return true
    }
    $("#txtPassword").blur(checkpassword)

    function checkenterpass(){
        var enterpass=$("#enterpass").val()
        var checkpass =$("#txtPassword").val()
        if(enterpass != checkpass)
        {
            $("#errorpass").html("Mật khẩu phải đúng với mật khẩu đã nhập")
            return false
        }
        $("#errorpass").html("(*)")
            return true
    }
    $("#enterpass").blur(checkenterpass)
})



   

