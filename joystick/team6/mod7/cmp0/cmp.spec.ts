
import { Cmp9670Component } from './cmp';
describe('Cmp9670Component', () => {
  it('should add', () => {
    expect(new Cmp9670Component().add9670(1)).toBe(9671);
  });
});