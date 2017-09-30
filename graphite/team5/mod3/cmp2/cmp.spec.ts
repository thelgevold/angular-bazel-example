
import { Cmp6532Component } from './cmp';
describe('Cmp6532Component', () => {
  it('should add', () => {
    expect(new Cmp6532Component().add6532(1)).toBe(6533);
  });
});