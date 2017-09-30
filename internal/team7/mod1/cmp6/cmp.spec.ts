
import { Cmp8716Component } from './cmp';
describe('Cmp8716Component', () => {
  it('should add', () => {
    expect(new Cmp8716Component().add8716(1)).toBe(8717);
  });
});