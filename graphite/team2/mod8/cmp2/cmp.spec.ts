
import { Cmp6282Component } from './cmp';
describe('Cmp6282Component', () => {
  it('should add', () => {
    expect(new Cmp6282Component().add6282(1)).toBe(6283);
  });
});