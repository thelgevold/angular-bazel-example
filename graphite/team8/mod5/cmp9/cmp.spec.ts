
import { Cmp6859Component } from './cmp';
describe('Cmp6859Component', () => {
  it('should add', () => {
    expect(new Cmp6859Component().add6859(1)).toBe(6860);
  });
});