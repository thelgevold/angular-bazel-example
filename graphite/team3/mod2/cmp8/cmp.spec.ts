
import { Cmp6328Component } from './cmp';
describe('Cmp6328Component', () => {
  it('should add', () => {
    expect(new Cmp6328Component().add6328(1)).toBe(6329);
  });
});