
import { Cmp6096Component } from './cmp';
describe('Cmp6096Component', () => {
  it('should add', () => {
    expect(new Cmp6096Component().add6096(1)).toBe(6097);
  });
});