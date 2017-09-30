
import { Cmp9576Component } from './cmp';
describe('Cmp9576Component', () => {
  it('should add', () => {
    expect(new Cmp9576Component().add9576(1)).toBe(9577);
  });
});