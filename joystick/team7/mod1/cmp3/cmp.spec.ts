
import { Cmp9713Component } from './cmp';
describe('Cmp9713Component', () => {
  it('should add', () => {
    expect(new Cmp9713Component().add9713(1)).toBe(9714);
  });
});