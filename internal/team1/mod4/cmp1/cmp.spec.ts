
import { Cmp8141Component } from './cmp';
describe('Cmp8141Component', () => {
  it('should add', () => {
    expect(new Cmp8141Component().add8141(1)).toBe(8142);
  });
});