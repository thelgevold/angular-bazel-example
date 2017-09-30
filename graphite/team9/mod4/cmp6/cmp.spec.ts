
import { Cmp6946Component } from './cmp';
describe('Cmp6946Component', () => {
  it('should add', () => {
    expect(new Cmp6946Component().add6946(1)).toBe(6947);
  });
});