var socket = io();
side = 15;

 function setup () {
     createCanvas ( matrix[0].length * side+1, matrix.length*side+1 )
     background ( " #acacac " )
}
function preload() {
    img1=loadImage('https://i.mycdn.me/image?id=879763701616&t=0&plc=MOBILE&tkn=*DdJm-ji7SX4KolpCaIBBrpdcFhw')
    img = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGC3MNsfnV6ul_BMz_lQUMJYu7bM1lz_4LNtVLZ32Kj593jb-J21YtbvG2FaVy27RpV8&usqp=CAU');
    img6=loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH2jmmDMA78FWon4KM4ApznE0ZSHt04D_Sq9zU-I9--kwhN8aXawJk93go3edb53Hpg10&usqp=CAU')
    img3=loadImage('https://p0.pikist.com/photos/5/616/earth-ground-texture-soil-brown-surface-dirt-land-nature-thumbnail.jpg')
    img4=loadImage ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2A4frJVrra95YM5gAHmsbXvunAU2aRykZqTGibPEdf7fV-4n7EauKdnP7IzHin6pCL4A&usqp=CAU')
    img5=loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSItQbDY72hZ4-na-0UCLBhK9W2sdXf2l1CEDAh5Onu5grLsHzDfBGQtcF9QziVRV0LVAI&usqp=CAU')
    img2=loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSev97m4ym_shQv9UfgLuQr78zc_i9H0ia9dJC0aYCNxpmOEWqlQRRVv0A4ddTXFGouoy0&usqp=CAU')
    img7=loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7_ghTvvxwTIQ94XvhP6ArY24IPBrTQnqzIFvmgGt2OKJURRzpDUDBxdkJl3nSaARur8&usqp=CAU')
    img8=loadImage('https://avatars.mds.yandex.net/get-zen_doc/119173/pub_5b71853b3eb48100a840cdd6_5b718567c45c0800a9228440/scale_1200')
}
function nkarel(matrix) {
    console.log(matrix);
    for ( var y=0; y<matrix.length;y++ ){
        for ( var x=0; x<matrix[y].length; x++ ){
            if ( matrix[y][x] == 1 ){
                image(img, x * side, y * side, side, side);
            }
            else if ( matrix[y][x]==0){
                image(img3, x * side, y * side, side, side);
            }
            else if ( matrix[y][x]==2){
                image(img1, x * side, y * side, side, side);
            }
            else if (matrix [y][x]==4){
                image(img2, x * side, y * side, side, side);
            }
            else if(matrix [y][x]==20){
                image(img8, x * side, y * side, side, side);
            }
        }
    }
    for ( var y=0; y<matrix.length;y++ ){
        for ( var x=0; x<matrix[y].length; x++ ){ 
            if (matrix [y][x]==8){
                image(img4, x * side, y * side, 2*side, 2*side);
            }
            else if (matrix [y][x]==16){
                image(img5, x * side, y * side, 2*side, 2*side);
            }
            else if (matrix [y][x]==32){
                image(img6, x * side, y * side, 2*side, 2*side);
            }
            else if (matrix [y][x]==64){
                image(img7, x * side, y * side, 2*side, 2*side);
            }
        }
    }
}
setInterval(
    function () {
    socket.on('send matrix', nkarel)
    },1000
)
/*function randomxot(){
    let x = Math.round(Math.random()*59)
        let y =Math.round(Math.random()*59)
        if (matrix[y][x]==0){
            var grass = new Grass(x,y)
            matrix[y][x] =1
            grassArr.push(grass)
        }
        else{
            let x = Math.round(Math.random()*59)
            let y =Math.round(Math.random()*59)
            if (matrix[y][x]==0){
                var grass = new Grass(x,y)
                matrix[y][x] =1
                grassArr.push(grass)
            }
        }
}
function randomxotaker(){
    let x = Math.round(Math.random()*59)
        let y =Math.round(Math.random()*59)
        if (matrix[y][x]==0){
            let eater = new GrassEater(x, y);
            matrix[y][x] = 2;
            grassEaterArr.push(eater);
        }
        else{
            let x = Math.round(Math.random()*59)
            let y =Math.round(Math.random()*59)
            if (matrix[y][x]==0){
                let eater = new GrassEater(x, y);
                matrix[y][x] = 2;
                grassEaterArr.push(eater);
            }
        }
    }
    function randomamenaker(){
        let x = Math.round(Math.random()*59)
        let y =Math.round(Math.random()*59)
        if (matrix[y][x]==0){
            let ker = new AMENAKER(x, y);
            matrix[y][x] = 4;
            amenakerArr.push(ker);
        }
        else{
            let x = Math.round(Math.random()*59)
            let y =Math.round(Math.random()*59)
            if (matrix[y][x]==0){
                let ker = new AMENAKER(x, y);
                matrix[y][x] = 4;
                amenakerArr.push(ker);
            }
        }
    }*/