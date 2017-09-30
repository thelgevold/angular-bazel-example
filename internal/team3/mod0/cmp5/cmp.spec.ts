
import { Cmp8305Component } from './cmp';
describe('Cmp8305Component', () => {
  it('should add', () => {
    expect(new Cmp8305Component().add8305(1)).toBe(8306);
  });
});