const expect = require('expect');

const {isRealString} = require('./validation')

describe('isRealString', () =>{
  it('should reject non-string values', () =>{
    var badString = 11111231;
    var result = isRealString(badString);

    expect(result).toBe(false);
  });

  it('should reject string with only spaces', () =>{
      var badString = '      ';
      var result = isRealString(badString);

      expect(result).toBe(false);
  });

  it('should allow string with non-space characters', () =>{
    var goodString = '     Benedek    ';
    var result = isRealString(goodString);

    expect(result).toBe(true);
  });

});
