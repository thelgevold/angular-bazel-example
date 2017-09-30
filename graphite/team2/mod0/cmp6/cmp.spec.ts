
import { Cmp6206Component } from './cmp';
describe('Cmp6206Component', () => {
  it('should add', () => {
    expect(new Cmp6206Component().add6206(1)).toBe(6207);
  });
});