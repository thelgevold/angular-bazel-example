
import { Cmp9485Component } from './cmp';
describe('Cmp9485Component', () => {
  it('should add', () => {
    expect(new Cmp9485Component().add9485(1)).toBe(9486);
  });
});