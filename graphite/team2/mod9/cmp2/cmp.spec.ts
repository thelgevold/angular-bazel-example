
import { Cmp6292Component } from './cmp';
describe('Cmp6292Component', () => {
  it('should add', () => {
    expect(new Cmp6292Component().add6292(1)).toBe(6293);
  });
});