
import { Cmp6815Component } from './cmp';
describe('Cmp6815Component', () => {
  it('should add', () => {
    expect(new Cmp6815Component().add6815(1)).toBe(6816);
  });
});