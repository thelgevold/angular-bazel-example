
import { Cmp6277Component } from './cmp';
describe('Cmp6277Component', () => {
  it('should add', () => {
    expect(new Cmp6277Component().add6277(1)).toBe(6278);
  });
});