
import { Cmp6551Component } from './cmp';
describe('Cmp6551Component', () => {
  it('should add', () => {
    expect(new Cmp6551Component().add6551(1)).toBe(6552);
  });
});