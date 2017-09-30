
import { Cmp6848Component } from './cmp';
describe('Cmp6848Component', () => {
  it('should add', () => {
    expect(new Cmp6848Component().add6848(1)).toBe(6849);
  });
});