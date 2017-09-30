
import { Cmp8700Component } from './cmp';
describe('Cmp8700Component', () => {
  it('should add', () => {
    expect(new Cmp8700Component().add8700(1)).toBe(8701);
  });
});