
import { Cmp8414Component } from './cmp';
describe('Cmp8414Component', () => {
  it('should add', () => {
    expect(new Cmp8414Component().add8414(1)).toBe(8415);
  });
});