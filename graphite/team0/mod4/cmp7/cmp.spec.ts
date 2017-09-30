
import { Cmp6047Component } from './cmp';
describe('Cmp6047Component', () => {
  it('should add', () => {
    expect(new Cmp6047Component().add6047(1)).toBe(6048);
  });
});