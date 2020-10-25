function getTuoi() {
    var Tuoi=window.prompt('Nhập tuổi của bạn :')
    if(typeof(Tuoi)!=="number" && Tuoi > 0)
    {
        if(Tuoi<16)
        {
            document.write('Không đủ điều kiện vào lớp 10')
        }
        else
        {
            document.write('Không đủ điều kiện vào lớp 10')
        }
    }
}
getTuoi()
