
import { Cmp6564Component } from './cmp';
describe('Cmp6564Component', () => {
  it('should add', () => {
    expect(new Cmp6564Component().add6564(1)).toBe(6565);
  });
});