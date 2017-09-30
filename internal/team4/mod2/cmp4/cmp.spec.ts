
import { Cmp8424Component } from './cmp';
describe('Cmp8424Component', () => {
  it('should add', () => {
    expect(new Cmp8424Component().add8424(1)).toBe(8425);
  });
});