
import { Cmp6145Component } from './cmp';
describe('Cmp6145Component', () => {
  it('should add', () => {
    expect(new Cmp6145Component().add6145(1)).toBe(6146);
  });
});