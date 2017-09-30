
import { Cmp9765Component } from './cmp';
describe('Cmp9765Component', () => {
  it('should add', () => {
    expect(new Cmp9765Component().add9765(1)).toBe(9766);
  });
});