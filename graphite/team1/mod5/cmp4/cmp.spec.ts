
import { Cmp6154Component } from './cmp';
describe('Cmp6154Component', () => {
  it('should add', () => {
    expect(new Cmp6154Component().add6154(1)).toBe(6155);
  });
});