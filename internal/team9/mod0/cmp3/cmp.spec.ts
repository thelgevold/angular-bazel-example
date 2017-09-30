
import { Cmp8903Component } from './cmp';
describe('Cmp8903Component', () => {
  it('should add', () => {
    expect(new Cmp8903Component().add8903(1)).toBe(8904);
  });
});