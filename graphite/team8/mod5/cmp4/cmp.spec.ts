
import { Cmp6854Component } from './cmp';
describe('Cmp6854Component', () => {
  it('should add', () => {
    expect(new Cmp6854Component().add6854(1)).toBe(6855);
  });
});