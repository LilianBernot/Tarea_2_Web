const asciiCodes = [97, 98, 99, 100, 
    101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 
    111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
    121, 122, 
    164,
    160,  130, 161, 162, 163, 129];

export function modify_data(data, rotation){
    // Attention, ne prend pas en compte les caractères sépciaux pour l'instant
    let asciiString = '';
    for (let i = 0; i < data.length; i++) {
        let charCode = data.charCodeAt(i);
        let index = asciiCodes.indexOf(charCode);

        let new_index = (index + rotation) % asciiCodes.length;
        let new_code = asciiCodes[new_index];
        let new_char = String.fromCharCode(new_code);
        asciiString += new_char;
    }
    console.log(asciiString);
    return asciiString;
}







// for (let i = 0; i < asciiCodes.length; i++) {
//   asciiString += String.fromCharCode(asciiCodes[i]);
// }

