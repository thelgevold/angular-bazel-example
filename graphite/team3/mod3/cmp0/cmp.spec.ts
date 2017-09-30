
import { Cmp6330Component } from './cmp';
describe('Cmp6330Component', () => {
  it('should add', () => {
    expect(new Cmp6330Component().add6330(1)).toBe(6331);
  });
});