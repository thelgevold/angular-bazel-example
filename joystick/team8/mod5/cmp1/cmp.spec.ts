
import { Cmp9851Component } from './cmp';
describe('Cmp9851Component', () => {
  it('should add', () => {
    expect(new Cmp9851Component().add9851(1)).toBe(9852);
  });
});