
import { Cmp9807Component } from './cmp';
describe('Cmp9807Component', () => {
  it('should add', () => {
    expect(new Cmp9807Component().add9807(1)).toBe(9808);
  });
});