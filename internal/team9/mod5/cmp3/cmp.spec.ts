
import { Cmp8953Component } from './cmp';
describe('Cmp8953Component', () => {
  it('should add', () => {
    expect(new Cmp8953Component().add8953(1)).toBe(8954);
  });
});