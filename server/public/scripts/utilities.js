function firstLetterUpper(str){
    let out = str.split('');
    out[0] = out[0].toUpperCase();
    return out.join('');
}