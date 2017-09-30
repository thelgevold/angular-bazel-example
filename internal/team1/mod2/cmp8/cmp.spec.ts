
import { Cmp8128Component } from './cmp';
describe('Cmp8128Component', () => {
  it('should add', () => {
    expect(new Cmp8128Component().add8128(1)).toBe(8129);
  });
});