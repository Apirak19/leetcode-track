    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.length === 0 || stack.pop() !== match[char]) { 
  let match = {
        return false;
      }
    }
  }
  return stack.length === 0;
};
"
