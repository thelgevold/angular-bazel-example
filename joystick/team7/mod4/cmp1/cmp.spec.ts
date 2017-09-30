
import { Cmp9741Component } from './cmp';
describe('Cmp9741Component', () => {
  it('should add', () => {
    expect(new Cmp9741Component().add9741(1)).toBe(9742);
  });
});