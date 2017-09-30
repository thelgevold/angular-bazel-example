
import { Cmp6008Component } from './cmp';
describe('Cmp6008Component', () => {
  it('should add', () => {
    expect(new Cmp6008Component().add6008(1)).toBe(6009);
  });
});