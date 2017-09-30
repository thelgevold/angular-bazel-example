
import { Cmp6458Component } from './cmp';
describe('Cmp6458Component', () => {
  it('should add', () => {
    expect(new Cmp6458Component().add6458(1)).toBe(6459);
  });
});