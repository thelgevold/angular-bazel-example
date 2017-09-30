
import { Cmp9584Component } from './cmp';
describe('Cmp9584Component', () => {
  it('should add', () => {
    expect(new Cmp9584Component().add9584(1)).toBe(9585);
  });
});