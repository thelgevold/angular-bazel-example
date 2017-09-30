
import { Cmp9133Component } from './cmp';
describe('Cmp9133Component', () => {
  it('should add', () => {
    expect(new Cmp9133Component().add9133(1)).toBe(9134);
  });
});