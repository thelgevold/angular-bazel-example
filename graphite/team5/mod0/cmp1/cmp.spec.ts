
import { Cmp6501Component } from './cmp';
describe('Cmp6501Component', () => {
  it('should add', () => {
    expect(new Cmp6501Component().add6501(1)).toBe(6502);
  });
});