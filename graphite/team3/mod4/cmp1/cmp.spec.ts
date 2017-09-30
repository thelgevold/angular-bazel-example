
import { Cmp6341Component } from './cmp';
describe('Cmp6341Component', () => {
  it('should add', () => {
    expect(new Cmp6341Component().add6341(1)).toBe(6342);
  });
});