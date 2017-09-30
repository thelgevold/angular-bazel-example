
import { Cmp5680Component } from './cmp';
describe('Cmp5680Component', () => {
  it('should add', () => {
    expect(new Cmp5680Component().add5680(1)).toBe(5681);
  });
});