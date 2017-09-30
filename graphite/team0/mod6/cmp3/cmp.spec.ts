
import { Cmp6063Component } from './cmp';
describe('Cmp6063Component', () => {
  it('should add', () => {
    expect(new Cmp6063Component().add6063(1)).toBe(6064);
  });
});