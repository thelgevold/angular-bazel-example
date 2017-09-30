
import { Cmp3544Component } from './cmp';
describe('Cmp3544Component', () => {
  it('should add', () => {
    expect(new Cmp3544Component().add3544(1)).toBe(3545);
  });
});