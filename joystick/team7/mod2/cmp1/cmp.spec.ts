
import { Cmp9721Component } from './cmp';
describe('Cmp9721Component', () => {
  it('should add', () => {
    expect(new Cmp9721Component().add9721(1)).toBe(9722);
  });
});