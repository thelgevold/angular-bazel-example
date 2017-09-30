
import { Cmp6563Component } from './cmp';
describe('Cmp6563Component', () => {
  it('should add', () => {
    expect(new Cmp6563Component().add6563(1)).toBe(6564);
  });
});