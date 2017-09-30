
import { Cmp8906Component } from './cmp';
describe('Cmp8906Component', () => {
  it('should add', () => {
    expect(new Cmp8906Component().add8906(1)).toBe(8907);
  });
});