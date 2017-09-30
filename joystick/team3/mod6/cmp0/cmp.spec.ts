
import { Cmp9360Component } from './cmp';
describe('Cmp9360Component', () => {
  it('should add', () => {
    expect(new Cmp9360Component().add9360(1)).toBe(9361);
  });
});