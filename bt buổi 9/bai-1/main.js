function getLuong() {
    var Luong = window.prompt('Nhập vào lương của bạn :')
    var Thue
    var LuongRong
    if(typeof(Luong)!=="number" && Luong>0)
    {
        if(Luong<7000000)
        {
            Thue=Luong*0.1
            luongRong=Luong-Thue
            document.write('Thuế thu nhập:',Thue,'\n')
            document.write('Lương ròng:',LuongRong)
        }
        if(Luong>=7000000 && Luong<15000000)
        {
            Thue=Luong*0.2
            luongRong=Luong-Thue
            document.write('Thuế thu nhập:',Thue,'\n')
            document.write('Lương ròng:',luongRong)
        }
        if(Luong==15000000) {
            Thue=Luong*0.3
            LuongRong=Luong-Thue
            document.write('Thuế thu nhập:',Thue,'\n')
            document.write('Lương ròng:',LuongRong)
        }
        return(Luong)
        return(Thue)
    }
}
getLuong()