
import { Cmp2512Component } from './cmp';
describe('Cmp2512Component', () => {
  it('should add', () => {
    expect(new Cmp2512Component().add2512(1)).toBe(2513);
  });
});