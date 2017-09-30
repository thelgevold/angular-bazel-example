
import { Cmp8643Component } from './cmp';
describe('Cmp8643Component', () => {
  it('should add', () => {
    expect(new Cmp8643Component().add8643(1)).toBe(8644);
  });
});