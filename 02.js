/*

Skriv en funktion som tar en sträng som parameter, gör om alla tecken som inte är a-z (stora eller små) till HTML-entiteter och returnerar resultatet.

Läs mer om HTML-entiteter här: https://dev.w3.org/html5/html-author/charref

Din funktion måste byta ut alla "osäkra" tecken mot "säkra". De tecken ni behöver byta ut är:
< = &lt;
> = &gt;
å = 
ä
ö = &ouml;
' = &apos;

Alla tecken som inte är a-z eller någon av ovanstående (t ex kommatecken, punkter, bindestreck osv) ska tas bort.

*/

function safe_string(string) {

     
        let stringArr = string.split('');
        let replacedArr = [];
        
        
          for (let letter of stringArr) {
          if (letter == "<") {
                letter = "&lt;"
                replacedArr.push(letter);
                } else if (letter == ">") {
                letter = "&gt;"
                replacedArr.push(letter);
                } else if (letter == "'") {
                letter = "&apos;"
                replacedArr.push(letter);
                } /* else if (letter == "å") {
                letter = "&ouml;"
                replacedArr.push(letter);
                } else if (letter == "ä") {
                letter = "&ouml;"
                replacedArr.push(letter);
                 } */else if (letter == "ö") {
                letter = "&ouml;"
                replacedArr.push(letter);
                } else if (letter == "." || letter == "," || letter == "-") {
                continue
                } else {
                replacedArr.push(letter);
            }
          
        }
         
        let replacedString = replacedArr.join('');      
        return replacedString  
         
}

console.log(safe_string("<h1>Sjörövare, O'hoj</h1>")); // Expected output: &lt;h1&gt;Sj&ouml;r&ouml;vare O&apos;hoj&lt;/h1&gt;











/* let string = "<h1>Sjörövare, O'hoj</h1>" */
/*         string.this.split("");
let newString = []; */


/* let string_replace_1 = newString.replace("<", "&lt;")
let string_replace_2 = string_replace_1.replace(">", "&gt;")
let string_replace_3 = string_replace_2.replace("ö", "&ouml;")
let string_replace_4 = string_replace_3.replace("'", "&apos;")
console.log(string_replace_4);

 */