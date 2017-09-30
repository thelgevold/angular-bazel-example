
import { Cmp9027Component } from './cmp';
describe('Cmp9027Component', () => {
  it('should add', () => {
    expect(new Cmp9027Component().add9027(1)).toBe(9028);
  });
});