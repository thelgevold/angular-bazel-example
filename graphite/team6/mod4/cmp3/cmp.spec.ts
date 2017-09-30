
import { Cmp6643Component } from './cmp';
describe('Cmp6643Component', () => {
  it('should add', () => {
    expect(new Cmp6643Component().add6643(1)).toBe(6644);
  });
});