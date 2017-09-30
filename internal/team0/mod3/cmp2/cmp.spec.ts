
import { Cmp8032Component } from './cmp';
describe('Cmp8032Component', () => {
  it('should add', () => {
    expect(new Cmp8032Component().add8032(1)).toBe(8033);
  });
});