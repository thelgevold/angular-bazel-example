
import { Cmp6076Component } from './cmp';
describe('Cmp6076Component', () => {
  it('should add', () => {
    expect(new Cmp6076Component().add6076(1)).toBe(6077);
  });
});