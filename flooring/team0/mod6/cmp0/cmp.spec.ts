
import { Cmp5060Component } from './cmp';
describe('Cmp5060Component', () => {
  it('should add', () => {
    expect(new Cmp5060Component().add5060(1)).toBe(5061);
  });
});