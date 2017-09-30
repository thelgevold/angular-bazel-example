
import { Cmp1384Component } from './cmp';
describe('Cmp1384Component', () => {
  it('should add', () => {
    expect(new Cmp1384Component().add1384(1)).toBe(1385);
  });
});