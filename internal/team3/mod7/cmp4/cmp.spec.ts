
import { Cmp8374Component } from './cmp';
describe('Cmp8374Component', () => {
  it('should add', () => {
    expect(new Cmp8374Component().add8374(1)).toBe(8375);
  });
});