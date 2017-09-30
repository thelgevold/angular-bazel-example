
import { Cmp5204Component } from './cmp';
describe('Cmp5204Component', () => {
  it('should add', () => {
    expect(new Cmp5204Component().add5204(1)).toBe(5205);
  });
});