
import { Cmp6303Component } from './cmp';
describe('Cmp6303Component', () => {
  it('should add', () => {
    expect(new Cmp6303Component().add6303(1)).toBe(6304);
  });
});