
import { Cmp9854Component } from './cmp';
describe('Cmp9854Component', () => {
  it('should add', () => {
    expect(new Cmp9854Component().add9854(1)).toBe(9855);
  });
});