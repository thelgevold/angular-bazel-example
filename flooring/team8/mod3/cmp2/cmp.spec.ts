
import { Cmp5832Component } from './cmp';
describe('Cmp5832Component', () => {
  it('should add', () => {
    expect(new Cmp5832Component().add5832(1)).toBe(5833);
  });
});