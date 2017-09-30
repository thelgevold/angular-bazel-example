
import { Cmp7384Component } from './cmp';
describe('Cmp7384Component', () => {
  it('should add', () => {
    expect(new Cmp7384Component().add7384(1)).toBe(7385);
  });
});