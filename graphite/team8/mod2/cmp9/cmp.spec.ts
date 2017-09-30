
import { Cmp6829Component } from './cmp';
describe('Cmp6829Component', () => {
  it('should add', () => {
    expect(new Cmp6829Component().add6829(1)).toBe(6830);
  });
});