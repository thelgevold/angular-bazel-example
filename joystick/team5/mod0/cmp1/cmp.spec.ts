
import { Cmp9501Component } from './cmp';
describe('Cmp9501Component', () => {
  it('should add', () => {
    expect(new Cmp9501Component().add9501(1)).toBe(9502);
  });
});