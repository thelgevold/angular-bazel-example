
import { Cmp6583Component } from './cmp';
describe('Cmp6583Component', () => {
  it('should add', () => {
    expect(new Cmp6583Component().add6583(1)).toBe(6584);
  });
});