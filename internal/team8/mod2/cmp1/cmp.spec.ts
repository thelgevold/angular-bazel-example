
import { Cmp8821Component } from './cmp';
describe('Cmp8821Component', () => {
  it('should add', () => {
    expect(new Cmp8821Component().add8821(1)).toBe(8822);
  });
});