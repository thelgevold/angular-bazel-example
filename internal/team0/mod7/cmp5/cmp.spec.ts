
import { Cmp8075Component } from './cmp';
describe('Cmp8075Component', () => {
  it('should add', () => {
    expect(new Cmp8075Component().add8075(1)).toBe(8076);
  });
});