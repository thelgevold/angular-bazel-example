
import { Cmp9083Component } from './cmp';
describe('Cmp9083Component', () => {
  it('should add', () => {
    expect(new Cmp9083Component().add9083(1)).toBe(9084);
  });
});