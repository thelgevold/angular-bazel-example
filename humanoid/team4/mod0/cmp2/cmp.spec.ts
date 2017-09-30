
import { Cmp7402Component } from './cmp';
describe('Cmp7402Component', () => {
  it('should add', () => {
    expect(new Cmp7402Component().add7402(1)).toBe(7403);
  });
});