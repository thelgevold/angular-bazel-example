
import { Cmp8848Component } from './cmp';
describe('Cmp8848Component', () => {
  it('should add', () => {
    expect(new Cmp8848Component().add8848(1)).toBe(8849);
  });
});