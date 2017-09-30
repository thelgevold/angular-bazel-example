
import { Cmp6825Component } from './cmp';
describe('Cmp6825Component', () => {
  it('should add', () => {
    expect(new Cmp6825Component().add6825(1)).toBe(6826);
  });
});