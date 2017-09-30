
import { Cmp6093Component } from './cmp';
describe('Cmp6093Component', () => {
  it('should add', () => {
    expect(new Cmp6093Component().add6093(1)).toBe(6094);
  });
});