
import { Cmp9402Component } from './cmp';
describe('Cmp9402Component', () => {
  it('should add', () => {
    expect(new Cmp9402Component().add9402(1)).toBe(9403);
  });
});