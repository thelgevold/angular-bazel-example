
import { Cmp9420Component } from './cmp';
describe('Cmp9420Component', () => {
  it('should add', () => {
    expect(new Cmp9420Component().add9420(1)).toBe(9421);
  });
});