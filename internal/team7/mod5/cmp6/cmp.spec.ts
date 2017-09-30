
import { Cmp8756Component } from './cmp';
describe('Cmp8756Component', () => {
  it('should add', () => {
    expect(new Cmp8756Component().add8756(1)).toBe(8757);
  });
});