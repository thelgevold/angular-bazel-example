
import { Cmp9975Component } from './cmp';
describe('Cmp9975Component', () => {
  it('should add', () => {
    expect(new Cmp9975Component().add9975(1)).toBe(9976);
  });
});