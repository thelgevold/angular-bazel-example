
import { Cmp6920Component } from './cmp';
describe('Cmp6920Component', () => {
  it('should add', () => {
    expect(new Cmp6920Component().add6920(1)).toBe(6921);
  });
});