
import { Cmp8018Component } from './cmp';
describe('Cmp8018Component', () => {
  it('should add', () => {
    expect(new Cmp8018Component().add8018(1)).toBe(8019);
  });
});