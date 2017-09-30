
import { Cmp9570Component } from './cmp';
describe('Cmp9570Component', () => {
  it('should add', () => {
    expect(new Cmp9570Component().add9570(1)).toBe(9571);
  });
});