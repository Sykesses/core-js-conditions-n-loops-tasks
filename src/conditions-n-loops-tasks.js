/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  } else if (c > max) {
    max = c;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const { x: qx, y: qy } = queen;
  const { x: kx, y: ky } = king;
  if (qx === kx || qy === ky) {
    return true;
  }
  if (Math.abs(qx - kx) === Math.abs(qy - ky)) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }
  if (a === b || a === c || b === c) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romanNumerals = [
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' },
  ];
  let result = '';
  let Num = num;
  let i = 0;
  while (i < romanNumerals.length) {
    while (Num >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      Num -= romanNumerals[i].value;
    }
    i += 1;
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const digitToWord = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    '-': 'minus',
    '.': 'point',
    ',': 'point',
  };
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    const char = numberStr[i];
    if (digitToWord[char] !== undefined) {
      if (result.length > 0) {
        result += ' ';
      }
      result += digitToWord[char];
    } else {
      throw new Error(`Unsupported character: ${char}`);
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const { length } = str; // Длина строки
  // Сравниваем символы с начала и конца строки
  for (let i = 0; i < length / 2; i += 1) {
    if (str[i] !== str[length - 1 - i]) {
      return false; // Если символы не совпадают, строка не палиндром
    }
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i; // Возвращаем индекс при первом совпадении
    }
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let Num = num;
  if (Num < 0) {
    Num = -Num;
  }
  // Обрабатываем каждую цифру числа
  while (Num > 0) {
    const currentDigit = Num % 10; // Получаем последнюю цифру
    if (currentDigit === digit) {
      return true; // Если цифра найдена, возвращаем true
    }
    Num = Math.floor(Num / 10); // Убираем последнюю цифру
  }
  // Проверка для случая num = 0 и digit = 0
  return digit === 0 && num === 0;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let totalSum = 0;

  // Считаем общую сумму всех элементов массива
  for (let i = 0; i < arr.length; i += 1) {
    totalSum += arr[i];
  }
  let leftSum = 0;
  // Проходим по массиву и ищем баланс
  for (let i = 0; i < arr.length; i += 1) {
    // Правая сумма = общая сумма - левая сумма - текущий элемент
    const rightSum = totalSum - leftSum - arr[i];
    if (leftSum === rightSum) {
      return i; // Если суммы равны, возвращаем индекс
    }
    // Обновляем левую сумму для следующей итерации
    leftSum += arr[i];
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = 0;
    }
  }

  let left = 0;
  let right = size - 1;
  let top = 0;
  let bottom = size - 1;
  let num = 1;
  while (left <= right && top <= bottom) {
    // Заполнение верхней строки (слева направо)
    for (let i = left; i <= right; i += 1) {
      num += 1;
      matrix[top][i] = num;
    }
    top += 1;

    // Заполнение правого столбца (сверху вниз)
    for (let i = top; i <= bottom; i += 1) {
      num += 1;
      matrix[i][right] = num;
    }
    right -= 1;

    // Заполнение нижней строки (справа налево)
    if (top <= bottom) {
      for (let i = right; i >= left; i -= 1) {
        num += 1;
        matrix[bottom][i] = num;
      }
      bottom -= 1;
    }

    // Заполнение левого столбца (снизу вверх)
    if (left <= right) {
      for (let i = bottom; i >= top; i -= 1) {
        num += 1;
        matrix[i][left] = num;
      }
      left += 1;
    }
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const Matrix = matrix;
  const n = Matrix.length;

  // Транспонируем матрицу
  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      // Меняем элементы местами
      const temp = Matrix[i][j];
      Matrix[i][j] = Matrix[j][i];
      Matrix[j][i] = temp;
    }
  }

  // Инвертируем строки
  for (let i = 0; i < n; i += 1) {
    let left = 0;
    let right = n - 1;
    while (left < right) {
      const temp = Matrix[i][left];
      Matrix[i][left] = Matrix[i][right];
      Matrix[i][right] = temp;
      left += 1;
      right -= 1;
    }
  }

  return Matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const Arr = arr;
  const n = Arr.length;
  // Проходим по всем элементам массива
  for (let i = 0; i < n - 1; i += 1) {
    let minIndex = i;

    // Находим минимальный элемент в оставшейся части массива
    for (let j = i + 1; j < n; j += 1) {
      if (Arr[j] < Arr[minIndex]) {
        minIndex = j;
      }
    }

    // Если минимальный элемент не на текущей позиции, меняем их местами
    if (minIndex !== i) {
      const temp = Arr[i];
      Arr[i] = Arr[minIndex];
      Arr[minIndex] = temp;
    }
  }

  return Arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let result = str;

  // Выполняем заданное количество итераций
  for (let i = 0; i < iterations; i += 1) {
    let evenChars = '';
    let oddChars = '';

    // Разделяем строку на четные и нечетные индексы
    for (let j = 0; j < result.length; j += 1) {
      if (j % 2 === 0) {
        evenChars += result[j]; // Четные индексы
      } else {
        oddChars += result[j]; // Нечетные индексы
      }
    }

    // Объединяем четные и нечетные части
    result = evenChars + oddChars;
  }

  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const digits = [];
  let num = number;

  // Разбиваем число на массив цифр
  while (num > 0) {
    digits.unshift(num % 10); // Извлекаем последнюю цифру
    num = Math.floor(num / 10); // Убираем последнюю цифру
  }

  let i = digits.length - 2;
  // Шаг 1: Найти точку изменения (первую цифру, которая меньше цифры справа)
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i -= 1;
  }

  // Если нет такой точки, то число не имеет следующей перестановки
  if (i === -1) {
    return number;
  }

  // Шаг 2: Найти минимальную цифру справа, которая больше digits[i]
  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j -= 1;
  }

  // Шаг 3: Обменять цифры
  [digits[i], digits[j]] = [digits[j], digits[i]];

  // Шаг 4: Отсортировать все цифры справа от позиции i
  let left = i + 1;
  let right = digits.length - 1;
  while (left < right) {
    [digits[left], digits[right]] = [digits[right], digits[left]];
    left += 1;
    right -= 1;
  }

  // Собираем число из массива цифр
  let result = 0;
  digits.forEach((digit) => {
    result = result * 10 + digit;
  });

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
