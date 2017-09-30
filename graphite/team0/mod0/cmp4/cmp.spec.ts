
import { Cmp6004Component } from './cmp';
describe('Cmp6004Component', () => {
  it('should add', () => {
    expect(new Cmp6004Component().add6004(1)).toBe(6005);
  });
});