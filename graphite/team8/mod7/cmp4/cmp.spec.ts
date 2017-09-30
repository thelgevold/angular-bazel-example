
import { Cmp6874Component } from './cmp';
describe('Cmp6874Component', () => {
  it('should add', () => {
    expect(new Cmp6874Component().add6874(1)).toBe(6875);
  });
});