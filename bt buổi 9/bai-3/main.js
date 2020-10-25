function kiemTra() {
    var So=window.prompt('Nhập số :')
    if(typeof(Tuoi)!=="number" && So <= 100)
    {
        document.write('Số này nhỏ hơn 100')
    }
    else 
    {
        document.write('Số này lơm hơn 100')
    }
}
kiemTra()