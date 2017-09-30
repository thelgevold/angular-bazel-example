
import { Cmp8328Component } from './cmp';
describe('Cmp8328Component', () => {
  it('should add', () => {
    expect(new Cmp8328Component().add8328(1)).toBe(8329);
  });
});