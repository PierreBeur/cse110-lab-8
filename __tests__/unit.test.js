// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

const tests = [
  ['isPhoneNumber', {
    matches: 'valid phone number',
    pairs: [
      ['(012)-345-6789', true],
      ['987-654-3210', true],
      ['-0123456789-', false],
      ['01-23-45-67-89', false]
    ]
  }],
  ['isEmail', {
    matches: 'valid email',
    pairs: [
      ['alpha@beta.com', true],
      ['chi_psi@omega.org', true],
      ['theta.zeta', false],
      ['mu@kappa', false]
    ]
  }],
  ['isStrongPassword', {
    matches: 'strong password',
    pairs: [
      ['a1_z', true],
      ['z___', true],
      ['1b2_', false],
      ['abcdef0123456789', false]
    ]
  }],
  ['isDate', {
    matches: 'date of the form XX/XX/YYYY',
    pairs: [
      ['11/20/2022', true],
      ['0/0/0000', true],
      ['4/20/69', false],
      ['3/14', false]
    ]
  }],
  ['isHexColor', {
    matches: 'valid 3 or 6 character hex code',
    pairs: [
      ['#aBcDeF', true],
      ['#123', true],
      ['#zYxWvU', false],
      ['#987654321', false]
    ]
  }]
]

for (const [fName, fTest] of tests) {
  describe(fName, () => {
    for (const [input, output] of fTest.pairs) {
      test(`${input} is${output?'':' not'} a ${fTest.matches}`, () => {
        expect(functions[fName](input)).toBe(output);
      })
    }
  });
}
