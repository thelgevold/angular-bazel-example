
import { Cmp5258Component } from './cmp';
describe('Cmp5258Component', () => {
  it('should add', () => {
    expect(new Cmp5258Component().add5258(1)).toBe(5259);
  });
});