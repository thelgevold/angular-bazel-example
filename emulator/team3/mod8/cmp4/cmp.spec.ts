
import { Cmp4384Component } from './cmp';
describe('Cmp4384Component', () => {
  it('should add', () => {
    expect(new Cmp4384Component().add4384(1)).toBe(4385);
  });
});