
import { Cmp8591Component } from './cmp';
describe('Cmp8591Component', () => {
  it('should add', () => {
    expect(new Cmp8591Component().add8591(1)).toBe(8592);
  });
});