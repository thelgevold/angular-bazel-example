
import { Cmp8406Component } from './cmp';
describe('Cmp8406Component', () => {
  it('should add', () => {
    expect(new Cmp8406Component().add8406(1)).toBe(8407);
  });
});