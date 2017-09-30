
import { Cmp7004Component } from './cmp';
describe('Cmp7004Component', () => {
  it('should add', () => {
    expect(new Cmp7004Component().add7004(1)).toBe(7005);
  });
});