
import { Cmp6561Component } from './cmp';
describe('Cmp6561Component', () => {
  it('should add', () => {
    expect(new Cmp6561Component().add6561(1)).toBe(6562);
  });
});