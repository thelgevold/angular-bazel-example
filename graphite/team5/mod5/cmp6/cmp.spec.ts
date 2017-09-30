
import { Cmp6556Component } from './cmp';
describe('Cmp6556Component', () => {
  it('should add', () => {
    expect(new Cmp6556Component().add6556(1)).toBe(6557);
  });
});