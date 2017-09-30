
import { Cmp6860Component } from './cmp';
describe('Cmp6860Component', () => {
  it('should add', () => {
    expect(new Cmp6860Component().add6860(1)).toBe(6861);
  });
});