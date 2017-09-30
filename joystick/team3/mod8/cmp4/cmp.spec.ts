
import { Cmp9384Component } from './cmp';
describe('Cmp9384Component', () => {
  it('should add', () => {
    expect(new Cmp9384Component().add9384(1)).toBe(9385);
  });
});