
import { Cmp6774Component } from './cmp';
describe('Cmp6774Component', () => {
  it('should add', () => {
    expect(new Cmp6774Component().add6774(1)).toBe(6775);
  });
});