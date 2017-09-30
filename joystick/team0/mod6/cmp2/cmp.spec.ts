
import { Cmp9062Component } from './cmp';
describe('Cmp9062Component', () => {
  it('should add', () => {
    expect(new Cmp9062Component().add9062(1)).toBe(9063);
  });
});