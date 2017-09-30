
import { Cmp6600Component } from './cmp';
describe('Cmp6600Component', () => {
  it('should add', () => {
    expect(new Cmp6600Component().add6600(1)).toBe(6601);
  });
});