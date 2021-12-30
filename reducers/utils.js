export function isOperator(value) {
  const opChecker = new RegExp('[-+*/]', 'g');
  return opChecker.test(value);
}

export function isNumber(str) {
  const numberChecker = new RegExp('[0-9]', 'g');
  if (numberChecker.test(str)) return true;
  else return false;
}

export function combineOperands(compute) {
  let combinedCompute = [];
  let lastAccValue = null;
  for (let i = 0; i < compute.length; i++) {
    let value = compute[i];
    if (lastAccValue === null) {
      if (isNumber(value)) {
        lastAccValue = value;
      }
    } else {
      if (isNumber(value)) {
        lastAccValue += value;
      }
      if (isOperator(value)) {
        combinedCompute.push(lastAccValue);
        combinedCompute.push(value);
        lastAccValue = null;
      }

      if (!isNumber(value) && !isOperator(value)) {
        combinedCompute.push(lastAccValue);
        lastAccValue = null;
      }
    }
  }

  return combinedCompute;
}

export function extractComponents(str) {
  let number = '';
  let lastNumber = '';

  let lastExpression = '';

  let operation = '';
  let lastOperation = '';

  const opChecker = new RegExp('[-+*/]', 'g');
  const matches = Array.from(str.matchAll(opChecker));

  let n = matches.length - 1;
  if (matches[n] && matches[n - 1]) {
    const curr = matches[n]['index'];
    const next = matches[n - 1]['index'];

    number = compute.slice(curr + 1).join('');
    lastNumber = compute.slice(next + 1, curr).join('');

    operation = compute[curr];
    lastOperation = compute[next];

    lastExpression = compute.slice(0, curr).join('');
  }

  return {
    number,
    operation,
    lastNumber,
    lastOperation,
    lastExpression,
  };
}
