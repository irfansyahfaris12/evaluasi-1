var n = 7
for(i = 0; i<n; i++){
    for(y = 0; y<n; y++){
        if(i == 3 || y == 3){
            document.write('+')
        }else{document.write(' - ')}
    }
    document.write('<br>')
}
document.write('<br>')