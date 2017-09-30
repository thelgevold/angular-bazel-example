
import { Cmp6871Component } from './cmp';
describe('Cmp6871Component', () => {
  it('should add', () => {
    expect(new Cmp6871Component().add6871(1)).toBe(6872);
  });
});