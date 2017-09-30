
import { Cmp6033Component } from './cmp';
describe('Cmp6033Component', () => {
  it('should add', () => {
    expect(new Cmp6033Component().add6033(1)).toBe(6034);
  });
});