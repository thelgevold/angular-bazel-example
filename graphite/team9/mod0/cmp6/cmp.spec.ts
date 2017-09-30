
import { Cmp6906Component } from './cmp';
describe('Cmp6906Component', () => {
  it('should add', () => {
    expect(new Cmp6906Component().add6906(1)).toBe(6907);
  });
});