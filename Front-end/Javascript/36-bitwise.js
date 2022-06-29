//AND: 1 + 1 = 1; all other cases = 0
//OR: only need has 1, will be 1
//XOR: match = 0; not match = 1;
//NOT: Invert all bits


//function to convert decimal to binary:
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

//function to convert binary to decimal:
function bin2dec(bin) {
    return parseInt(bin, 2).toString(10);
}