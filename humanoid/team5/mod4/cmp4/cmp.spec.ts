
import { Cmp7544Component } from './cmp';
describe('Cmp7544Component', () => {
  it('should add', () => {
    expect(new Cmp7544Component().add7544(1)).toBe(7545);
  });
});