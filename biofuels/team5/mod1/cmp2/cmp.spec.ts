
import { Cmp1512Component } from './cmp';
describe('Cmp1512Component', () => {
  it('should add', () => {
    expect(new Cmp1512Component().add1512(1)).toBe(1513);
  });
});