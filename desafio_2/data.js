const unicode = ['\\u0061', "\\u0062", "\\u0063", "\\u0064", "\\u0065", "\\u0066", "\\u0067", "\\u0068", "\\u0069", 
    '\\u006A', '\\u006B', '\\u006C', '\\u006D', '\\u006E', '\\u006F', 
    '\\u0070', '\\u0071', '\\u0072','\\u0073', '\\u0074', '\\u0075', 
    '\\u0076', '\\u0077', '\\u0078', '\\u0079', '\\u007A', 
    '\\u00F1', '\\u00E1', '\\u00E9', '\\u00ED', '\\u00F3', '\\u00FC']

const unicode_to_unicode = [{value: '\u0061'}, {value: '\u0062'}, {value: '\u0063'}, {value: '\u0064'}, {value: '\u0065'}, 
    {value: '\u0066'}, {value: '\u0067'}, {value: '\u0068'}, {value: '\u0069'}, 
    {value: '\u006A'}, {value: '\u006B'}, {value: '\u006C'}, {value: '\u006D'}, {value: '\u006E'}, {value: '\u006F'}, 
    {value: '\u0070'}, {value: '\u0071'}, {value: '\u0072'},{value: '\u0073'}, {value: '\u0074'}, {value: '\u0075'}, 
    {value: '\u0076'}, {value: '\u0077'}, {value: '\u0078'}, {value: '\u0079'}, {value: '\u007A'}, 
    {value: '\u00F1'}, {value: '\u00E1'}, {value: '\u00E9'}, {value: '\u00ED'}, {value: '\u00F3'}, {value: '\u00FC'}]


export function modify_data_unicode(inputString, rotation){

    const parts = inputString.split('\n');
    let asciiString = '';
    
    for (let i = 0; i < parts.length; i++) {
        let part = parts[i];
        let seperate_space = part.split(" ");

        for(let j = 0; j < seperate_space.length; j++){
            let sep = seperate_space[j];

            for (let k = 0; k < sep.length; k++){
                var hex = sep[k].codePointAt(0).toString(16);
                var result = "\\u" + "0000".substring(0, 4 - hex.length) + hex;
                
                if(unicode.includes(result) !== true){
                    asciiString += sep[k]; // we don't touch it, it's not a character we want to change
                } else{
                    let index = unicode.indexOf(String(result));
                    let new_index = (index + rotation) % unicode.length;

                    let new_char = unicode_to_unicode[new_index].value;
                    asciiString += new_char;
                }
            }
            asciiString += ' ';
        }
        asciiString += '\n';
    }
    return asciiString;
}

