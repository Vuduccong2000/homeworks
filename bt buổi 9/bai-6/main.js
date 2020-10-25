function giaiPhuongTrinh() {
    var a=window.prompt('Nhập a :')
    var b=window.prompt('Nhập b :')
    var c=window.prompt('Nhập c :')
    var delta=(b*b-(4*a*c))
    if(a==0 && b==0)
    {
        document.write('Phương trinh vô nghiệm')
    }
    if(a==0)
    {
        document.write('Puong trinh có một nghiêm :',(-c/b))

    }
    if(delta<0)
    {
        document.write('Phương trình vô nghiêm ')
    }
    if(delta==0)
    {
        document.write('Phuong trình có nghiêm kép :',(-b/(2*a)))

    }
    if(delta > 0)
    {
        document.write('x1=',(-b-Math.sqrt(delta))/(2*a))
        document.write('x2=',(-b-Math.sqrt(delta))/(2*a))
    }

}
giaiPhuongTrinh()