
import { Cmp8311Component } from './cmp';
describe('Cmp8311Component', () => {
  it('should add', () => {
    expect(new Cmp8311Component().add8311(1)).toBe(8312);
  });
});