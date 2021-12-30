export const NUMBER_SHOW = "NUMBER_SHOW";
export const NUMBER_DELETE = "NUMBER_DELETE";
export const NUMBER_CLEAR = "NUMBER_CLEAR";
export const NUMBER_ADD = "NUMBER_ADD";
export const NUMBER_MINUS = "NUMBER_MINUS";
export const NUMBER_DIVIDE = "NUMBER_DIVIDE";
export const NUMBER_MULTIPLY = "NUMBER_MULTIPLY";
export const NUMBER_EQUALS = "NUMBER_EQUALS";
export const NUMBER_INF = "NUMBER_INF";

export function numberShow(number) {
  return {
    type: NUMBER_SHOW,
    payload: number
  }
}

export function numberDelete() {
  return {
    type: NUMBER_DELETE
  }
}

export function numberClear() {
  return {
    type: NUMBER_CLEAR
  }
}


export function numberAdd() {
  return {
    type: NUMBER_ADD,
    payload: '+'
  }
}

export function checkIfNumberIsInf() {
  return {
    type: NUMBER_INF,
  }
}

export function numberMinus() {
  return {
    type: NUMBER_MINUS,
    payload: '-'
  }
}


export function numberMultiply() {
  return {
    type: NUMBER_MULTIPLY,
    payload: '*'
  }
}

export function numberIsNegative() {
  return {
    type: NUMBER_IS_NEG,
    payload: '-'
  }
}

export function numberDivide() {
  return {
    type: NUMBER_DIVIDE,
    payload: '/'
  }
}

export function numberEquals() {
  return {
    type: NUMBER_EQUALS
  }
}

