
import { Cmp6958Component } from './cmp';
describe('Cmp6958Component', () => {
  it('should add', () => {
    expect(new Cmp6958Component().add6958(1)).toBe(6959);
  });
});