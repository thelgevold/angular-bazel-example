
import { Cmp6360Component } from './cmp';
describe('Cmp6360Component', () => {
  it('should add', () => {
    expect(new Cmp6360Component().add6360(1)).toBe(6361);
  });
});