
import { Cmp6281Component } from './cmp';
describe('Cmp6281Component', () => {
  it('should add', () => {
    expect(new Cmp6281Component().add6281(1)).toBe(6282);
  });
});