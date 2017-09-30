
import { Cmp6505Component } from './cmp';
describe('Cmp6505Component', () => {
  it('should add', () => {
    expect(new Cmp6505Component().add6505(1)).toBe(6506);
  });
});