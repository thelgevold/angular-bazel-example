
import { Cmp6014Component } from './cmp';
describe('Cmp6014Component', () => {
  it('should add', () => {
    expect(new Cmp6014Component().add6014(1)).toBe(6015);
  });
});