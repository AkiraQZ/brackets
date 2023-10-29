module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) {
      return false;
    }

    const openingBrackets = bracketsConfig.map(pair => pair[0]);
    const closingBrackets = bracketsConfig.map(pair => pair[1]);

    for (let i = 0; i < openingBrackets.length; i++) {
      const openingBracket = openingBrackets[i];
      const closingBracket = closingBrackets[i];
      const index = str.indexOf(openingBracket);

      if (index !== -1) {
        const nextIndex = str.indexOf(closingBracket, index + 1);

        if (nextIndex !== -1) {
          const inside = str.slice(index + 1, nextIndex);
          const outside = str.slice(0, index) + str.slice(nextIndex + 1);

          return check(inside, bracketsConfig) && check(outside, bracketsConfig);
        }
      }
    }

    return str.length === 0;
  }
