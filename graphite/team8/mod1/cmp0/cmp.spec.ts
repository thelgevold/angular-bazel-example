
import { Cmp6810Component } from './cmp';
describe('Cmp6810Component', () => {
  it('should add', () => {
    expect(new Cmp6810Component().add6810(1)).toBe(6811);
  });
});