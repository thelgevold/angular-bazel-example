
import { Cmp9864Component } from './cmp';
describe('Cmp9864Component', () => {
  it('should add', () => {
    expect(new Cmp9864Component().add9864(1)).toBe(9865);
  });
});