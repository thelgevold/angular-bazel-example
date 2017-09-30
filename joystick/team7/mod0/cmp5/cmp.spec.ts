
import { Cmp9705Component } from './cmp';
describe('Cmp9705Component', () => {
  it('should add', () => {
    expect(new Cmp9705Component().add9705(1)).toBe(9706);
  });
});