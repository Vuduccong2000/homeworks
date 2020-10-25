function tinhCuocDienThoai() {
    var PhiThueBao=25000
    var Cuoc
    var PhutGoi=window.prompt('Nhập số phút goi :')
    if(PhutGoi<=50)
    {
        Cuoc=600*PhutGoi
        document.write('Cuoc điện thoại la :',Cuoc)
    }
    if(PhutGoi<=150 && PhutGoi>50)
    {
        Cuoc=400*PhutGoi
        document.write('Cuoc điện thoại la :',Cuoc)
    }
    if(PhutGoi<=200 && PhutGoi>150)
    {
        Cuoc=200*PhutGoi
        document.write('Cuoc điện thoại la :',Cuoc)
    }
    return(Cuoc)
}
tinhCuocDienThoai()