
import { Cmp6312Component } from './cmp';
describe('Cmp6312Component', () => {
  it('should add', () => {
    expect(new Cmp6312Component().add6312(1)).toBe(6313);
  });
});