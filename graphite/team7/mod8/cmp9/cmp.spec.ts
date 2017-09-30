
import { Cmp6789Component } from './cmp';
describe('Cmp6789Component', () => {
  it('should add', () => {
    expect(new Cmp6789Component().add6789(1)).toBe(6790);
  });
});