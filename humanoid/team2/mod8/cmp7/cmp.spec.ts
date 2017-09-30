
import { Cmp7287Component } from './cmp';
describe('Cmp7287Component', () => {
  it('should add', () => {
    expect(new Cmp7287Component().add7287(1)).toBe(7288);
  });
});