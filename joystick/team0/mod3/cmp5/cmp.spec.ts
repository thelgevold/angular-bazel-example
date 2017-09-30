
import { Cmp9035Component } from './cmp';
describe('Cmp9035Component', () => {
  it('should add', () => {
    expect(new Cmp9035Component().add9035(1)).toBe(9036);
  });
});