
import { Cmp7014Component } from './cmp';
describe('Cmp7014Component', () => {
  it('should add', () => {
    expect(new Cmp7014Component().add7014(1)).toBe(7015);
  });
});