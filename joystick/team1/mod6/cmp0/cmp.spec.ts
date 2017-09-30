
import { Cmp9160Component } from './cmp';
describe('Cmp9160Component', () => {
  it('should add', () => {
    expect(new Cmp9160Component().add9160(1)).toBe(9161);
  });
});