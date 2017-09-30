
import { Cmp5295Component } from './cmp';
describe('Cmp5295Component', () => {
  it('should add', () => {
    expect(new Cmp5295Component().add5295(1)).toBe(5296);
  });
});