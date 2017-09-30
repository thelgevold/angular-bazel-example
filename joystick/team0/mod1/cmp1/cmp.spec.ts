
import { Cmp9011Component } from './cmp';
describe('Cmp9011Component', () => {
  it('should add', () => {
    expect(new Cmp9011Component().add9011(1)).toBe(9012);
  });
});