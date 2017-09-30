
import { Cmp8033Component } from './cmp';
describe('Cmp8033Component', () => {
  it('should add', () => {
    expect(new Cmp8033Component().add8033(1)).toBe(8034);
  });
});