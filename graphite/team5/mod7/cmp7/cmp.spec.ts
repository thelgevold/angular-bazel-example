
import { Cmp6577Component } from './cmp';
describe('Cmp6577Component', () => {
  it('should add', () => {
    expect(new Cmp6577Component().add6577(1)).toBe(6578);
  });
});