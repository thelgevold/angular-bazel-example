
import { Cmp6567Component } from './cmp';
describe('Cmp6567Component', () => {
  it('should add', () => {
    expect(new Cmp6567Component().add6567(1)).toBe(6568);
  });
});