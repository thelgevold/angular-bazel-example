
import { Cmp6601Component } from './cmp';
describe('Cmp6601Component', () => {
  it('should add', () => {
    expect(new Cmp6601Component().add6601(1)).toBe(6602);
  });
});