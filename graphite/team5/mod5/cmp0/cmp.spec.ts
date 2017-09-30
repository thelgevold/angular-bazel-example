
import { Cmp6550Component } from './cmp';
describe('Cmp6550Component', () => {
  it('should add', () => {
    expect(new Cmp6550Component().add6550(1)).toBe(6551);
  });
});