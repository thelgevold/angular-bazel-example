
import { Cmp9802Component } from './cmp';
describe('Cmp9802Component', () => {
  it('should add', () => {
    expect(new Cmp9802Component().add9802(1)).toBe(9803);
  });
});