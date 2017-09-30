
import { Cmp5109Component } from './cmp';
describe('Cmp5109Component', () => {
  it('should add', () => {
    expect(new Cmp5109Component().add5109(1)).toBe(5110);
  });
});