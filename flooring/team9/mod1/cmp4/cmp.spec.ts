
import { Cmp5914Component } from './cmp';
describe('Cmp5914Component', () => {
  it('should add', () => {
    expect(new Cmp5914Component().add5914(1)).toBe(5915);
  });
});