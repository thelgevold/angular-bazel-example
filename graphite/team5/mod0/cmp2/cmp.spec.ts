
import { Cmp6502Component } from './cmp';
describe('Cmp6502Component', () => {
  it('should add', () => {
    expect(new Cmp6502Component().add6502(1)).toBe(6503);
  });
});