
import { Cmp9575Component } from './cmp';
describe('Cmp9575Component', () => {
  it('should add', () => {
    expect(new Cmp9575Component().add9575(1)).toBe(9576);
  });
});