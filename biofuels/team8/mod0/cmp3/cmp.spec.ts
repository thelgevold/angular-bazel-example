
import { Cmp1803Component } from './cmp';
describe('Cmp1803Component', () => {
  it('should add', () => {
    expect(new Cmp1803Component().add1803(1)).toBe(1804);
  });
});