const asciiCodes = [97, 98, 99, 100, 
    101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 
    111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
    121, 122, 
    164,
    160,  130, 161, 162, 163, 129];

const unicode = ['\\u0061', "\\u0062", "\\u0063", "\\u0064", "\\u0065", "\\u0066", "\\u0067", "\\u0068", "\\u0069"]
const unicode_to_unicode = [{value: '\u0061'}, {value: '\u0062'}, {value: '\u0063'}, {value: '\u0064'}, {value: '\u0065'}, 
    {value: '\u0066'}, {value: '\u0067'}, {value: '\u0068'}, {value: '\u0069'}, 
    {value: '\u006A'}, {value: '\u006B'}, {value: '\u006C'}, {value: '\u006D'}, {value: '\u006E'}, {value: '\u006F'}, 
    {value: '\u0070'}, {value: '\u0071'}, {value: '\u0072'},{value: '\u0073'}, {value: '\u0074'}, {value: '\u0075'}, 
    {value: '\u0076'}, {value: '\u0077'}, {value: '\u0078'}, {value: '\u0079'}, {value: '\u007A'}, 
    {value: '\u00F1'}, {value: '\u00E1'}, {value: '\u00E9'}, {value: '\u00ED'}, {value: '\u00F3'}, {value: '\u00FC'}]

// for (let i = 20; i < unicode_to_unicode.length; i++) {
//     console.log(unicode_to_unicode[i].value);
// }

export function modify_data(data, rotation){
    console.log("Data before : " + data);
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
    console.log("Data after : " + asciiString);
    return asciiString;
}


export function modify_data_unicode(data, rotation){
    console.log("Data before : " + data);
    // Attention, ne prend pas en compte les caractères sépciaux pour l'instant
    let asciiString = '';
    for (let i = 0; i < data.length; i++) {

        var hex = data[i].codePointAt(0).toString(16);
        var result = "\\u" + "0000".substring(0, 4 - hex.length) + hex;
        console.log(result);

        let index = unicode.indexOf(String(result));
        let new_index = (index + rotation) % unicode.length;
        
        let new_char = unicode_to_unicode[new_index].value;
        asciiString += new_char;
    }
    console.log("Data after : " + asciiString);
    return asciiString;
}

