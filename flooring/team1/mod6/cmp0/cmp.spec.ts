
import { Cmp5160Component } from './cmp';
describe('Cmp5160Component', () => {
  it('should add', () => {
    expect(new Cmp5160Component().add5160(1)).toBe(5161);
  });
});