
import { Cmp5384Component } from './cmp';
describe('Cmp5384Component', () => {
  it('should add', () => {
    expect(new Cmp5384Component().add5384(1)).toBe(5385);
  });
});