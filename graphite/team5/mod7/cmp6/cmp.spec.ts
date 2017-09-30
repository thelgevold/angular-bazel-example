
import { Cmp6576Component } from './cmp';
describe('Cmp6576Component', () => {
  it('should add', () => {
    expect(new Cmp6576Component().add6576(1)).toBe(6577);
  });
});