
import { Cmp8137Component } from './cmp';
describe('Cmp8137Component', () => {
  it('should add', () => {
    expect(new Cmp8137Component().add8137(1)).toBe(8138);
  });
});