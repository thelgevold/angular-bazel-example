
import { Cmp5815Component } from './cmp';
describe('Cmp5815Component', () => {
  it('should add', () => {
    expect(new Cmp5815Component().add5815(1)).toBe(5816);
  });
});