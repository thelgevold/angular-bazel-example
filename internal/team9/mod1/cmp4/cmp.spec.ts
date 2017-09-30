
import { Cmp8914Component } from './cmp';
describe('Cmp8914Component', () => {
  it('should add', () => {
    expect(new Cmp8914Component().add8914(1)).toBe(8915);
  });
});