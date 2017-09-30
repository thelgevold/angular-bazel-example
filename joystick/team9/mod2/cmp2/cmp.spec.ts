
import { Cmp9922Component } from './cmp';
describe('Cmp9922Component', () => {
  it('should add', () => {
    expect(new Cmp9922Component().add9922(1)).toBe(9923);
  });
});