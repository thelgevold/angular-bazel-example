
import { Cmp9422Component } from './cmp';
describe('Cmp9422Component', () => {
  it('should add', () => {
    expect(new Cmp9422Component().add9422(1)).toBe(9423);
  });
});