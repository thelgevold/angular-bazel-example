
import { Cmp8459Component } from './cmp';
describe('Cmp8459Component', () => {
  it('should add', () => {
    expect(new Cmp8459Component().add8459(1)).toBe(8460);
  });
});