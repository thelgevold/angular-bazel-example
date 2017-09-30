
import { Cmp4102Component } from './cmp';
describe('Cmp4102Component', () => {
  it('should add', () => {
    expect(new Cmp4102Component().add4102(1)).toBe(4103);
  });
});