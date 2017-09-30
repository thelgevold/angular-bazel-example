
import { Cmp5402Component } from './cmp';
describe('Cmp5402Component', () => {
  it('should add', () => {
    expect(new Cmp5402Component().add5402(1)).toBe(5403);
  });
});