
import { Cmp6023Component } from './cmp';
describe('Cmp6023Component', () => {
  it('should add', () => {
    expect(new Cmp6023Component().add6023(1)).toBe(6024);
  });
});