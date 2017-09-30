
import { Cmp6863Component } from './cmp';
describe('Cmp6863Component', () => {
  it('should add', () => {
    expect(new Cmp6863Component().add6863(1)).toBe(6864);
  });
});