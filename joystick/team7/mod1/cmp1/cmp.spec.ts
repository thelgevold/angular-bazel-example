
import { Cmp9711Component } from './cmp';
describe('Cmp9711Component', () => {
  it('should add', () => {
    expect(new Cmp9711Component().add9711(1)).toBe(9712);
  });
});