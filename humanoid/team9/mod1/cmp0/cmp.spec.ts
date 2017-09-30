
import { Cmp7910Component } from './cmp';
describe('Cmp7910Component', () => {
  it('should add', () => {
    expect(new Cmp7910Component().add7910(1)).toBe(7911);
  });
});