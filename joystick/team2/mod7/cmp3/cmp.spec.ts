
import { Cmp9273Component } from './cmp';
describe('Cmp9273Component', () => {
  it('should add', () => {
    expect(new Cmp9273Component().add9273(1)).toBe(9274);
  });
});