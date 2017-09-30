
import { Cmp5341Component } from './cmp';
describe('Cmp5341Component', () => {
  it('should add', () => {
    expect(new Cmp5341Component().add5341(1)).toBe(5342);
  });
});