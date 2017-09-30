
import { Cmp5014Component } from './cmp';
describe('Cmp5014Component', () => {
  it('should add', () => {
    expect(new Cmp5014Component().add5014(1)).toBe(5015);
  });
});