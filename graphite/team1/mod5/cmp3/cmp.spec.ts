
import { Cmp6153Component } from './cmp';
describe('Cmp6153Component', () => {
  it('should add', () => {
    expect(new Cmp6153Component().add6153(1)).toBe(6154);
  });
});