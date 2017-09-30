
import { Cmp6487Component } from './cmp';
describe('Cmp6487Component', () => {
  it('should add', () => {
    expect(new Cmp6487Component().add6487(1)).toBe(6488);
  });
});