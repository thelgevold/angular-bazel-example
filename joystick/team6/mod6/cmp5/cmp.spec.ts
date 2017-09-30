
import { Cmp9665Component } from './cmp';
describe('Cmp9665Component', () => {
  it('should add', () => {
    expect(new Cmp9665Component().add9665(1)).toBe(9666);
  });
});