
import { Cmp1832Component } from './cmp';
describe('Cmp1832Component', () => {
  it('should add', () => {
    expect(new Cmp1832Component().add1832(1)).toBe(1833);
  });
});