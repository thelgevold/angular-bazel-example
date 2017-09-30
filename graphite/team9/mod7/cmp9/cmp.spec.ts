
import { Cmp6979Component } from './cmp';
describe('Cmp6979Component', () => {
  it('should add', () => {
    expect(new Cmp6979Component().add6979(1)).toBe(6980);
  });
});