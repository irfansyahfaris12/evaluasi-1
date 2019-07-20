var banyakAngka=20;
var angkaGenap=[];
var angkaGanjil=[];

function cek(){
    for(var i=1; i <= banyakAngka; i++){
        if(i % 2 == 0){
            angkaGenap.push(i)
        }else{
            angkaGanjil.push(i)
        }
    }
    document.write(angkaGenap)
    document.write('<br>')
    document.write(angkaGanjil)
}
cek()