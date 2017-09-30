
import { Cmp9014Component } from './cmp';
describe('Cmp9014Component', () => {
  it('should add', () => {
    expect(new Cmp9014Component().add9014(1)).toBe(9015);
  });
});