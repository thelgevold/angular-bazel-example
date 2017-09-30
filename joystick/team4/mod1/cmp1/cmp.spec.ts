
import { Cmp9411Component } from './cmp';
describe('Cmp9411Component', () => {
  it('should add', () => {
    expect(new Cmp9411Component().add9411(1)).toBe(9412);
  });
});