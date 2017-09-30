
import { Cmp6305Component } from './cmp';
describe('Cmp6305Component', () => {
  it('should add', () => {
    expect(new Cmp6305Component().add6305(1)).toBe(6306);
  });
});