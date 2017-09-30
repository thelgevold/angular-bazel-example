
import { Cmp5512Component } from './cmp';
describe('Cmp5512Component', () => {
  it('should add', () => {
    expect(new Cmp5512Component().add5512(1)).toBe(5513);
  });
});