
import { Cmp8458Component } from './cmp';
describe('Cmp8458Component', () => {
  it('should add', () => {
    expect(new Cmp8458Component().add8458(1)).toBe(8459);
  });
});