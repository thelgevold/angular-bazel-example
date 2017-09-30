
import { Cmp9980Component } from './cmp';
describe('Cmp9980Component', () => {
  it('should add', () => {
    expect(new Cmp9980Component().add9980(1)).toBe(9981);
  });
});