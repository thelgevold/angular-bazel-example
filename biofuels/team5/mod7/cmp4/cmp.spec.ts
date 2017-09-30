
import { Cmp1574Component } from './cmp';
describe('Cmp1574Component', () => {
  it('should add', () => {
    expect(new Cmp1574Component().add1574(1)).toBe(1575);
  });
});