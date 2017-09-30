
import { Cmp9680Component } from './cmp';
describe('Cmp9680Component', () => {
  it('should add', () => {
    expect(new Cmp9680Component().add9680(1)).toBe(9681);
  });
});