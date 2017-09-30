
import { Cmp6224Component } from './cmp';
describe('Cmp6224Component', () => {
  it('should add', () => {
    expect(new Cmp6224Component().add6224(1)).toBe(6225);
  });
});