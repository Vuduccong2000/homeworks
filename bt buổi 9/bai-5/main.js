function xep() {
    var DiemKT=window.prompt('Nhập điểm kiểm tra :')
    var DiemGiuaKi=window.prompt('Nhập điểm giữa kì :')
    var DiemCuoiKi=window.prompt('Nhập điểm cuối kì :')
    let DiemTB=((DiemKT+DiemGiuaKi+DiemCuoiKi)/3)
    if(typeof(DiemTB)!=="number" && DiemTB <= 10 && DiemTB>0)
    {
        if(DiemTB<5.0)
        {
            document.write('Hạng F')
        }
        else if(DiemTB>=5.0 && DiemTB<7.0)
        {
            document.write('Hạng C')
        }
        else if(DiemTB>=7.0 && DiemTB<9.0)
        {
            document.write('Hạng B')
        }
        else
        {
            document.write('Hạng A')
        }

    }
}
xep()