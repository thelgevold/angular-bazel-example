
import { Cmp6572Component } from './cmp';
describe('Cmp6572Component', () => {
  it('should add', () => {
    expect(new Cmp6572Component().add6572(1)).toBe(6573);
  });
});