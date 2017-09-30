
import { Cmp6275Component } from './cmp';
describe('Cmp6275Component', () => {
  it('should add', () => {
    expect(new Cmp6275Component().add6275(1)).toBe(6276);
  });
});