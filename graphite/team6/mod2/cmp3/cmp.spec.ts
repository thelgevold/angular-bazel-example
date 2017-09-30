
import { Cmp6623Component } from './cmp';
describe('Cmp6623Component', () => {
  it('should add', () => {
    expect(new Cmp6623Component().add6623(1)).toBe(6624);
  });
});