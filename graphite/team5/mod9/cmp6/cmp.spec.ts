
import { Cmp6596Component } from './cmp';
describe('Cmp6596Component', () => {
  it('should add', () => {
    expect(new Cmp6596Component().add6596(1)).toBe(6597);
  });
});