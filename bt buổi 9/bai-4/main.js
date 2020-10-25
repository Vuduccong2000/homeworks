function timSoLonNhat() {
    var a=window.prompt('Nhập a :')
    var b=window.prompt('Nhập b :')
    var c=window.prompt('Nhập c :')
    var Max=0
    if(a>b && a>c)
    {
        Max=a
        
    }
    else if(b>a && b>c )
    {
        Max=b
        
    }
    else
    {
        Max=c
    }
    document.write('Max :',Max)
}
timSoLonNhat()