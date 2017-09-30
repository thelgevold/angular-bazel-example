
import { Cmp6712Component } from './cmp';
describe('Cmp6712Component', () => {
  it('should add', () => {
    expect(new Cmp6712Component().add6712(1)).toBe(6713);
  });
});