
import { Cmp9084Component } from './cmp';
describe('Cmp9084Component', () => {
  it('should add', () => {
    expect(new Cmp9084Component().add9084(1)).toBe(9085);
  });
});