
import { Cmp5544Component } from './cmp';
describe('Cmp5544Component', () => {
  it('should add', () => {
    expect(new Cmp5544Component().add5544(1)).toBe(5545);
  });
});