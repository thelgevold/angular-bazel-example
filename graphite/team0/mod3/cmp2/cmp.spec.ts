
import { Cmp6032Component } from './cmp';
describe('Cmp6032Component', () => {
  it('should add', () => {
    expect(new Cmp6032Component().add6032(1)).toBe(6033);
  });
});