
import { Cmp6700Component } from './cmp';
describe('Cmp6700Component', () => {
  it('should add', () => {
    expect(new Cmp6700Component().add6700(1)).toBe(6701);
  });
});