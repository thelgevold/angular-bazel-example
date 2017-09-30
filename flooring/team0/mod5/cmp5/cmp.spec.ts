
import { Cmp5055Component } from './cmp';
describe('Cmp5055Component', () => {
  it('should add', () => {
    expect(new Cmp5055Component().add5055(1)).toBe(5056);
  });
});