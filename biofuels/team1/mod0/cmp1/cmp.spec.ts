
import { Cmp1101Component } from './cmp';
describe('Cmp1101Component', () => {
  it('should add', () => {
    expect(new Cmp1101Component().add1101(1)).toBe(1102);
  });
});