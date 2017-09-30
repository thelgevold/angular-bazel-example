
import { Cmp8110Component } from './cmp';
describe('Cmp8110Component', () => {
  it('should add', () => {
    expect(new Cmp8110Component().add8110(1)).toBe(8111);
  });
});