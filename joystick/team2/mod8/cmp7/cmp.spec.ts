
import { Cmp9287Component } from './cmp';
describe('Cmp9287Component', () => {
  it('should add', () => {
    expect(new Cmp9287Component().add9287(1)).toBe(9288);
  });
});