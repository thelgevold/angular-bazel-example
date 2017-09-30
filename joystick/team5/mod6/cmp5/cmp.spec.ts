
import { Cmp9565Component } from './cmp';
describe('Cmp9565Component', () => {
  it('should add', () => {
    expect(new Cmp9565Component().add9565(1)).toBe(9566);
  });
});