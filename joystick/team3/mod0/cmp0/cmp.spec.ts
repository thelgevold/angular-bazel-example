
import { Cmp9300Component } from './cmp';
describe('Cmp9300Component', () => {
  it('should add', () => {
    expect(new Cmp9300Component().add9300(1)).toBe(9301);
  });
});