
import { Cmp3986Component } from './cmp';
describe('Cmp3986Component', () => {
  it('should add', () => {
    expect(new Cmp3986Component().add3986(1)).toBe(3987);
  });
});