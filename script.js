// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedStr){
  let decodedstr = '';
	for(let i=0; i<encodedStr.length; i++){
		const char = encodedStr[i];
		 decodedStr += lookup[char] || char;
		
	if(encodedStr.charAt[i] >= 'A' || charAt[i] <= 'Z'){
		decodedstr = decodedstr + lookup[encodedStr.charAt[i]] || encodedStr.charAt[i];
	}
	return decodedstr;
}


module.exports = rot13;
