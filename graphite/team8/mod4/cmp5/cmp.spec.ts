
import { Cmp6845Component } from './cmp';
describe('Cmp6845Component', () => {
  it('should add', () => {
    expect(new Cmp6845Component().add6845(1)).toBe(6846);
  });
});