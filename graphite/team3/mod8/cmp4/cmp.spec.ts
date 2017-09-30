
import { Cmp6384Component } from './cmp';
describe('Cmp6384Component', () => {
  it('should add', () => {
    expect(new Cmp6384Component().add6384(1)).toBe(6385);
  });
});