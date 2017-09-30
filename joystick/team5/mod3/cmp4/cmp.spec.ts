
import { Cmp9534Component } from './cmp';
describe('Cmp9534Component', () => {
  it('should add', () => {
    expect(new Cmp9534Component().add9534(1)).toBe(9535);
  });
});