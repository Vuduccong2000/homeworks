function tinhHoaHong() {
    var DoanhSo=window.prompt('Nhập doanh số :')
    var HoaHong
    if(DoanhSo<=100000000)
    {
        HoaHong=DoanhSo*(5/100)
        document.write('Hoa hồng la :',HoaHong)
    }
    if(DoanhSo<=300000000)
    {
        HoaHong=DoanhSo*(10/100)
        document.write('Hoa hồng la :',HoaHong)
    }
    else{
        HoaHong=DoanhSo*(20/100)
        document.write('Hoa hồng la :',HoaHong)
    }
    return (HoaHong)
}
tinhHoaHong()
