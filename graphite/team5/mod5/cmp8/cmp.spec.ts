
import { Cmp6558Component } from './cmp';
describe('Cmp6558Component', () => {
  it('should add', () => {
    expect(new Cmp6558Component().add6558(1)).toBe(6559);
  });
});