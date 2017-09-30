
import { Cmp8425Component } from './cmp';
describe('Cmp8425Component', () => {
  it('should add', () => {
    expect(new Cmp8425Component().add8425(1)).toBe(8426);
  });
});