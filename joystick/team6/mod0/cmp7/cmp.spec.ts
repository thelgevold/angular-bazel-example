
import { Cmp9607Component } from './cmp';
describe('Cmp9607Component', () => {
  it('should add', () => {
    expect(new Cmp9607Component().add9607(1)).toBe(9608);
  });
});