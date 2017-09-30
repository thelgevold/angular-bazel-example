
import { Cmp6811Component } from './cmp';
describe('Cmp6811Component', () => {
  it('should add', () => {
    expect(new Cmp6811Component().add6811(1)).toBe(6812);
  });
});